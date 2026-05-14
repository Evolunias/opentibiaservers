'use client';

import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

export default function Header() {
  const { user, loading } = useAuth();

  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(31, 41, 55, 0.08)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between mb-3">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div style={{
              width: '40px',
              height: '40px',
              background: 'rgba(31, 41, 55, 0.08)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#1f2937'
            }}>
              ⚔️
            </div>
            <h1 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#1f2937',
              margin: 0,
              letterSpacing: '0.5px'
            }}>
              Open Tibia Servers
            </h1>
          </Link>

          <div className="flex items-center gap-3">
            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center gap-2">
                    <Link
                      href="/submit-server"
                      style={{
                        padding: '0.6rem 1.2rem',
                        background: '#1f2937',
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        borderRadius: '2px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'inline-block',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = '0 4px 12px rgba(31, 41, 55, 0.2)';
                        e.target.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow = 'none';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Submit
                    </Link>
                    <Link
                      href="/dashboard"
                      style={{
                        padding: '0.6rem 1.2rem',
                        background: 'rgba(31, 41, 55, 0.06)',
                        color: '#1f2937',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        border: '1px solid rgba(31, 41, 55, 0.15)',
                        borderRadius: '2px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'inline-block',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(31, 41, 55, 0.12)';
                        e.target.style.boxShadow = '0 2px 8px rgba(31, 41, 55, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(31, 41, 55, 0.06)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Dashboard
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Link
                      href="/auth/login"
                      style={{
                        padding: '0.6rem 1.2rem',
                        color: '#1f2937',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'inline-block',
                        cursor: 'pointer',
                        borderBottom: '1.5px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderBottomColor = '#1f2937';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderBottomColor = 'transparent';
                      }}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth/register"
                      style={{
                        padding: '0.6rem 1.2rem',
                        background: '#1f2937',
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        borderRadius: '2px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'inline-block',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = '0 4px 12px rgba(31, 41, 55, 0.2)';
                        e.target.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow = 'none';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <p style={{ color: 'rgba(71, 85, 105, 0.6)', fontSize: '0.9rem', margin: 0, fontWeight: 400 }}>
          Curated premium servers. Excellence in every detail.
        </p>
      </div>
    </header>
  );
}
