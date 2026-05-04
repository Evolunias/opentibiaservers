import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Initialize Supabase client with secret key (never expose publicly)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Simple in-memory rate limiting store
// Maps IP addresses to request timestamps
const rateLimitStore = new Map();

// Rate limit: 5 requests per hour per IP
const RATE_LIMIT_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

/**
 * Get client IP address from request
 */
function getClientIP(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

/**
 * Check if client has exceeded rate limit
 */
function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitStore.get(ip) || [];

  // Remove timestamps older than the rate limit window
  const recentRequests = userRequests.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentRequests.length >= RATE_LIMIT_REQUESTS) {
    return false; // Rate limit exceeded
  }

  // Add current request timestamp
  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);

  return true; // Within rate limit
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Trim and validate input
 */
function sanitizeInput(input) {
  return input?.trim() || '';
}

/**
 * POST /api/subscribe
 * Handles newsletter subscription with security
 */
export async function POST(request) {
  try {
    const clientIP = getClientIP(request);

    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        {
          error: 'Too many subscription attempts. Please try again later.',
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, character_name } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        {
          error: 'Name and email are required.',
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email).toLowerCase();
    const sanitizedCharacterName = sanitizeInput(character_name);

    // Validate email format
    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        {
          error: 'Please provide a valid email address.',
        },
        { status: 400 }
      );
    }

    // Check if email already exists in database
    const { data: existingSubscriber, error: queryError } = await supabase
      .from('evolisca')
      .select('email')
      .eq('email', sanitizedEmail)
      .single();

    if (queryError && queryError.code !== 'PGRST116') {
      // PGRST116 means no rows found, which is expected
      console.error('Database error checking for existing subscriber:', queryError);
      return NextResponse.json(
        {
          error: 'An error occurred while processing your request. Please try again.',
        },
        { status: 500 }
      );
    }

    // If subscriber already exists, return friendly error
    if (existingSubscriber) {
      return NextResponse.json(
        {
          error: 'This email is already subscribed to our newsletter!',
          isDuplicate: true,
        },
        { status: 409 } // Conflict status code
      );
    }

    // Insert new subscriber
    const { data, error: insertError } = await supabase
      .from('evolisca')
      .insert([
        {
          name: sanitizedName,
          email: sanitizedEmail,
          character_name: sanitizedCharacterName,
          created_at: new Date().toISOString(),
        },
      ]);

    if (insertError) {
      console.error('Database error inserting subscriber:', insertError);
      return NextResponse.json(
        {
          error: 'Failed to process subscription. Please try again.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Successfully subscribed to the newsletter!',
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription endpoint error:', error);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}
