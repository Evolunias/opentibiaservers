'use client';

import Link from 'next/link';

export default function EvomaniasFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'rgba(20, 20, 25, 0.85)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px 12px 0 0',
      marginTop: '3rem',
      marginLeft: '1.5rem',
      marginRight: '1.5rem',
      marginBottom: 0
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
            <h3 style={{ color: '#7cb8ff', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem' }}>
              EVOMANIAS
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Experience the ultimate Tibia adventure. Create your account, join thousands of players, and embark on an epic journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#7cb8ff', fontWeight: '600', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ display: 'grid', gap: '0.5rem' }}>
              <li>
                <Link href="/evomanias" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/evomanias/register" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/evomanias/highscores" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Highscores
                </Link>
              </li>
              <li>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Download Client
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 style={{ color: '#7cb8ff', fontWeight: '600', marginBottom: '1rem' }}>Community</h4>
            <ul style={{ display: 'grid', gap: '0.5rem' }}>
              <li>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Forums
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Server Rules
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: '#7cb8ff', fontWeight: '600', marginBottom: '1rem' }}>Legal</h4>
            <ul style={{ display: 'grid', gap: '0.5rem' }}>
              <li>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            © {currentYear} EVOMANIAS. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
              Discord
            </a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
              Twitter
            </a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
