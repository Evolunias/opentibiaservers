'use client';

import Link from 'next/link';
import { useEvomaniasTheme } from '../context/EvomaniasThemeContext';

export default function EvomaniasFooter() {
  const { theme } = useEvomaniasTheme();
  const isDark = theme === 'dark';
  const currentYear = new Date().getFullYear();

  const colors = {
    bg: isDark ? 'rgba(20, 20, 25, 0.85)' : 'rgba(255, 255, 255, 0.95)',
    border: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(124, 184, 255, 0.15)',
    text: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(75, 85, 99, 0.7)',
    heading: isDark ? '#7cb8ff' : '#2563eb',
    shadow: isDark ? '0 -4px 20px rgba(0, 0, 0, 0.3)' : '0 -4px 20px rgba(0, 0, 0, 0.08)'
  };

  return (
    <footer style={{
      background: colors.bg,
      backdropFilter: 'blur(12px)',
      borderTop: `1px solid ${colors.border}`,
      borderRadius: '12px 12px 0 0',
      marginTop: '3rem',
      marginLeft: '1.5rem',
      marginRight: '1.5rem',
      marginBottom: 0,
      boxShadow: colors.shadow,
      transition: 'all 0.3s ease'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Branding */}
          <div>
            <h3 style={{ color: colors.heading, fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem', transition: 'color 0.3s ease' }}>
              Evomanias
            </h3>
            <p style={{ color: colors.text, fontSize: '0.875rem', lineHeight: '1.6', transition: 'color 0.3s ease' }}>
              Experience the ultimate Tibia adventure. Create your account, join thousands of players, and embark on an epic journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: colors.heading, fontWeight: '600', marginBottom: '1rem', transition: 'color 0.3s ease' }}>Quick Links</h4>
            <ul style={{ display: 'grid', gap: '0.5rem' }}>
              <li>
                <Link href="/evomanias" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/evomanias/register" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/evomanias/highscores" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Highscores
                </Link>
              </li>
              <li>
                <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Download Client
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 style={{ color: colors.heading, fontWeight: '600', marginBottom: '1rem', transition: 'color 0.3s ease' }}>Community</h4>
            <ul style={{ display: 'grid', gap: '0.5rem' }}>
              <li>
                <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Forums
                </a>
              </li>
              <li>
                <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Server Rules
                </a>
              </li>
              <li>
                <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: colors.heading, fontWeight: '600', marginBottom: '1rem', transition: 'color 0.3s ease' }}>Legal</h4>
            <ul style={{ display: 'grid', gap: '0.5rem' }}>
              <li>
                <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${colors.border}`,
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'border-color 0.3s ease'
        }}>
          <p style={{ margin: 0, fontSize: '0.875rem', color: colors.text, transition: 'color 0.3s ease' }}>
            © {currentYear} Evomanias. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
              Discord
            </a>
            <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
              Twitter
            </a>
            <a href="#" style={{ color: colors.text, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
