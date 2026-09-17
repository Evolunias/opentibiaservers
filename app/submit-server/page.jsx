'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { deriveServerIdentity } from '@/lib/server-identity';
import { assessExternalLink, normalizeExternalUrl, safeUrlOrNull } from '@/lib/external-links';

export default function SubmitServerPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    ip: '',
    port: '7171',
    version: '8.6',
    world_type: 'PVP',
    location: 'USA',
    website_url: '',
    owner_email: '',
    contact_discord: '',
    forum_url: '',
    launcher_url: '',
    trailer_url: '',
    description: '',
    promo_headline: '',
    feature_bullets: '',
    gallery_images: '',
    faq_items: '',
    custom_sections: '',
    exp_rate: '1',
    skill_rate: '1',
    loot_rate: '1',
    status_endpoint_url: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/?auth=login&redirect=/submit-server');
    }
  }, [user, loading, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Server name is required';
    if (!formData.ip.trim()) return 'IP address is required';
    if (!formData.port || isNaN(formData.port) || formData.port < 1 || formData.port > 65535) return 'Valid port is required (1-65535)';
    if (!formData.version.trim()) return 'Version is required';
    if (!formData.owner_email.trim()) return 'Owner email is required';
    return null;
  };

  const expectedDomains = () => {
    const website = normalizeExternalUrl(formData.website_url);
    return [formData.ip, website ? new URL(website).hostname : null].filter(Boolean);
  };

  const validateLinks = () => {
    const domains = expectedDomains();
    const checks = [
      ['Website URL', formData.website_url, { expectedDomains: domains }],
      ['Discord', formData.contact_discord, { allowUntrusted: true }],
      ['Forum URL', formData.forum_url, { expectedDomains: domains, allowUntrusted: true }],
      ['Launcher URL', formData.launcher_url, { kind: 'download', expectedDomains: domains }],
      ['Trailer URL', formData.trailer_url, { expectedDomains: domains, allowUntrusted: true }],
    ];

    for (const [label, value, options] of checks) {
      if (!String(value || '').trim()) continue;
      const result = assessExternalLink(value, options);
      if (!result.clickable) return `${label} was blocked: ${result.reason}.`;
    }

    const gallery = formData.gallery_images
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);
    for (const image of gallery) {
      const result = assessExternalLink(image, { kind: 'image', expectedDomains: domains });
      if (!result.clickable) return `Gallery URL was blocked: ${result.reason}.`;
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const linkError = validateLinks();
    if (linkError) {
      setError(linkError);
      return;
    }

    setIsSubmitting(true);

    try {
      const domains = expectedDomains();
      const websiteUrl = safeUrlOrNull(formData.website_url, { expectedDomains: domains }) || null;
      const identity = deriveServerIdentity({ host: formData.ip, website_url: websiteUrl, name: formData.name });
      const { error: insertError } = await supabase
        .from('servers')
        .insert([
          {
            name: identity.name,
            legacy_name: formData.name,
            ip: formData.ip,
            port: parseInt(formData.port),
            version: formData.version,
            world_type: formData.world_type,
            location: formData.location,
            website_url: websiteUrl,
            owner_email: formData.owner_email,
            contact_discord: safeUrlOrNull(formData.contact_discord, { allowUntrusted: true }) || null,
            forum_url: safeUrlOrNull(formData.forum_url, { expectedDomains: domains, allowUntrusted: true }) || null,
            launcher_url: safeUrlOrNull(formData.launcher_url, { kind: 'download', expectedDomains: domains }) || null,
            trailer_url: safeUrlOrNull(formData.trailer_url, { expectedDomains: domains, allowUntrusted: true }) || null,
            description: formData.description || null,
            promo_headline: formData.promo_headline || formData.name,
            promo_subheadline: formData.description || null,
            feature_bullets: formData.feature_bullets
              .split('\n')
              .map((item) => item.trim())
              .filter(Boolean),
            gallery_images: formData.gallery_images
              .split('\n')
              .map((item) => item.trim())
              .filter((item) => assessExternalLink(item, { kind: 'image', expectedDomains: domains }).clickable),
            faq_items: formData.faq_items.trim() ? JSON.parse(formData.faq_items) : [],
            custom_sections: formData.custom_sections.trim() ? JSON.parse(formData.custom_sections) : [],
            exp_rate: parseFloat(formData.exp_rate),
            skill_rate: parseFloat(formData.skill_rate),
            loot_rate: parseFloat(formData.loot_rate),
            status_endpoint_url: formData.status_endpoint_url.trim() || null,
            user_id: user.id,
            owner_user_id: user.id,
            source: 'user_submission',
            host: formData.ip,
            slug: identity.slug,
            canonical_slug: identity.slug,
            root_domain: identity.rootDomain,
            canonical_path: `/${identity.slug}`,
            keyword_primary: identity.name,
            seo_title: `${identity.name} | Open Tibia Server Listing | OpenTibiaServers.com`,
            seo_description: `${identity.name}. ${formData.version} Open Tibia server. ${formData.world_type} world hosted in ${formData.location}.`.slice(0, 158),
            claim_status: 'claimed',
            claimed_at: new Date().toISOString(),
            verification_status: 'pending',
            is_online: false,
          },
        ]);

      if (insertError) {
        if (insertError.code === '23505') {
          setError('A server with this IP already exists');
        } else {
          setError(insertError.message || 'Failed to submit server');
        }
        setIsSubmitting(false);
        return;
      }

      setSuccess('Server submitted successfully! Verification will begin shortly.');
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } catch (err) {
      setError(err.message || 'An error occurred while submitting your server');
      console.error(err);
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/dashboard" className="text-blue-600 hover:underline mb-6 inline-block">
          Back to Dashboard
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Submit Your Server</h1>
        <p className="text-gray-600 mb-8">List your Tibia server in our directory. Verification will check DNS and server connectivity.</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg mb-6">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-lg border border-gray-200">
          {/* Basic Info */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Server Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Dragon Slayers"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="owner_email" className="block text-sm font-medium text-gray-700 mb-2">
              Owner Email *
            </label>
            <input
              id="owner_email"
              type="email"
              name="owner_email"
              value={formData.owner_email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          {/* Network */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-4">Network Details</h2>
          </div>

          <div>
            <label htmlFor="ip" className="block text-sm font-medium text-gray-700 mb-2">
              IP Address *
            </label>
            <input
              id="ip"
              type="text"
              name="ip"
              value={formData.ip}
              onChange={handleChange}
              placeholder="192.168.1.1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="port" className="block text-sm font-medium text-gray-700 mb-2">
              Port *
            </label>
            <input
              id="port"
              type="number"
              name="port"
              value={formData.port}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
              min="1"
              max="65535"
            />
          </div>

          <div>
            <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 mb-2">
              Official Website URL (for DNS verification)
            </label>
            <input
              id="website_url"
              type="url"
              name="website_url"
              value={formData.website_url}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="contact_discord" className="block text-sm font-medium text-gray-700 mb-2">
              Discord or Community Contact
            </label>
            <input
              id="contact_discord"
              type="text"
              name="contact_discord"
              value={formData.contact_discord}
              onChange={handleChange}
              placeholder="https://discord.gg/example"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="forum_url" className="block text-sm font-medium text-gray-700 mb-2">
              Forum or Community Board URL
            </label>
            <input
              id="forum_url"
              type="url"
              name="forum_url"
              value={formData.forum_url}
              onChange={handleChange}
              placeholder="https://example.com/forum"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="version" className="block text-sm font-medium text-gray-700 mb-2">
              Tibia Version *
            </label>
            <select
              id="version"
              name="version"
              value={formData.version}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              <option value="8.0">8.0</option>
              <option value="8.6">8.6</option>
              <option value="9.0">9.0</option>
              <option value="9.6">9.6</option>
              <option value="10.0">10.0</option>
              <option value="11.0">11.0</option>
              <option value="12.0">12.0</option>
              <option value="13.0">13.0</option>
            </select>
          </div>

          {/* Gameplay */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-4">Gameplay Settings</h2>
          </div>

          <div>
            <label htmlFor="world_type" className="block text-sm font-medium text-gray-700 mb-2">
              World Type
            </label>
            <select
              id="world_type"
              name="world_type"
              value={formData.world_type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              <option value="PVP">PVP</option>
              <option value="PVP-E">PVP-E</option>
              <option value="OPTIONAL PVP">OPTIONAL PVP</option>
              <option value="NON-PVP">NON-PVP</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              <option value="USA">USA</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="South America">South America</option>
              <option value="Brazil">Brazil</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="exp_rate" className="block text-sm font-medium text-gray-700 mb-2">
              Exp Rate (multiplier)
            </label>
            <input
              id="exp_rate"
              type="number"
              name="exp_rate"
              value={formData.exp_rate}
              onChange={handleChange}
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="skill_rate" className="block text-sm font-medium text-gray-700 mb-2">
              Skill Rate (multiplier)
            </label>
            <input
              id="skill_rate"
              type="number"
              name="skill_rate"
              value={formData.skill_rate}
              onChange={handleChange}
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="loot_rate" className="block text-sm font-medium text-gray-700 mb-2">
              Loot Rate (multiplier)
            </label>
            <input
              id="loot_rate"
              type="number"
              name="loot_rate"
              value={formData.loot_rate}
              onChange={handleChange}
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Directory Summary
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about your server..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-4">Enhanced Listing Profile</h2>
            <p className="text-sm text-gray-600 mb-4">
              These fields power the richer OpenTibiaServers.com profile: screenshots, official links, FAQs, and structured sections that old server lists do not support.
            </p>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="promo_headline" className="block text-sm font-medium text-gray-700 mb-2">
              Profile Headline
            </label>
            <input
              id="promo_headline"
              type="text"
              name="promo_headline"
              value={formData.promo_headline}
              onChange={handleChange}
              placeholder="e.g., Custom 8.6 PvP with daily events and active Discord"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="launcher_url" className="block text-sm font-medium text-gray-700 mb-2">
              Launcher or Client URL
            </label>
            <input
              id="launcher_url"
              type="url"
              name="launcher_url"
              value={formData.launcher_url}
              onChange={handleChange}
              placeholder="https://example.com/download"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="trailer_url" className="block text-sm font-medium text-gray-700 mb-2">
              Trailer or Video URL
            </label>
            <input
              id="trailer_url"
              type="url"
              name="trailer_url"
              value={formData.trailer_url}
              onChange={handleChange}
              placeholder="https://youtube.com/..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="feature_bullets" className="block text-sm font-medium text-gray-700 mb-2">
              Highlights
            </label>
            <textarea
              id="feature_bullets"
              name="feature_bullets"
              value={formData.feature_bullets}
              onChange={handleChange}
              placeholder="One highlight per line: custom bosses, active wars, real map, anti-bot, daily events..."
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="gallery_images" className="block text-sm font-medium text-gray-700 mb-2">
              Screenshot URLs
            </label>
            <textarea
              id="gallery_images"
              name="gallery_images"
              value={formData.gallery_images}
              onChange={handleChange}
              placeholder="One image URL per line"
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="faq_items" className="block text-sm font-medium text-gray-700 mb-2">
              FAQ JSON
            </label>
            <textarea
              id="faq_items"
              name="faq_items"
              value={formData.faq_items}
              onChange={handleChange}
              placeholder='[{"question":"How do I play?","answer":"Create an account, download the client, and connect with the launcher."}]'
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              disabled={isSubmitting}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="custom_sections" className="block text-sm font-medium text-gray-700 mb-2">
              Custom Content Sections JSON
            </label>
            <textarea
              id="custom_sections"
              name="custom_sections"
              value={formData.custom_sections}
              onChange={handleChange}
              placeholder='[{"title":"Launch Information","body":"Explain season, start date, rates, events, and rules."}]'
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              disabled={isSubmitting}
            />
          </div>

          
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Player metrics (optional)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Provide a public HTTPS JSON endpoint you host with metrics only — no emails, no scrapes.
              Expected shape: {'{"players_online": 42, "players_peak": 120, "is_online": true}'}
            </p>
            <label htmlFor="status_endpoint_url" className="block text-sm font-medium text-gray-700 mb-2">
              Status endpoint URL
            </label>
            <input
              id="status_endpoint_url"
              type="url"
              name="status_endpoint_url"
              value={formData.status_endpoint_url}
              onChange={handleChange}
              placeholder="https://your-server.example/status.json"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>
          <div className="md:col-span-2 bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Verification:</span> Your server will be verified through DNS record checks and IP/port connectivity tests. Make sure your contact information is accurate.
            </p>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gray-950 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Server'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
