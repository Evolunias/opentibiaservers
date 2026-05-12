'use client';

import Link from 'next/link';
import { useEvomaniasAuth } from '../../context/EvomaniasAuthContext';
import { useState } from 'react';

export default function EvomaniasHeader() {
  const { account } = useEvomaniasAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="navbar" style={{
      background: 'rgba(20, 20, 25, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    }}>
      <div className="max-w-7xl mx-auto px-6 py-3 w-full">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/evomanias" className="flex items-center gap-2 hover:opacity-80 transition flex-shrink-0">
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '20px'
            }}>
              ⚔️
            </div>
            <h1 className="text-xl font-bold hidden sm:block" style={{ color: '#7cb8ff' }}>
              EVOMANIAS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0 flex-1 ml-8">
            <Link href="/evomanias" className="nav-link">
              Home
            </Link>
            <Link href="/evomanias/highscores" className="nav-link">
              Highscores
            </Link>
            <a href="#community" className="nav-link">
              Community
            </a>
            <a href="#library" className="nav-link">
              Library
            </a>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center gap-2 flex-1 justify-center max-w-xs">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '6px',
              padding: '0.5rem',
              width: '100%'
            }}>
              <input
                type="search"
                placeholder="Search character..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.95)',
                  outline: 'none',
                  flex: 1,
                  fontSize: '0.875rem',
                  padding: '0.25rem 0.5rem'
                }}
              />
              <button style={{
                background: 'none',
                border: 'none',
                color: 'rgba(124, 184, 255, 0.7)',
                cursor: 'pointer',
                padding: '0.25rem',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {!account ? (
              <>
                <Link
                  href="/evomanias/login"
                  className="btn btn-secondary hidden sm:inline-block"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                >
                  Sign In
                </Link>
                <Link
                  href="/evomanias/register"
                  className="btn btn-primary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                >
                  Create Account
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/evomanias/account"
                  className="btn btn-primary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                >
                  My Account
                </Link>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingLeft: '0.75rem',
                  marginLeft: '0.75rem',
                  display: 'none',
                  '@media (min-width: 640px)': {
                    display: 'block'
                  }
                }}>
                  {account.name}
                </div>
              </>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                marginLeft: '0.5rem'
              }}
              title="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '0.75rem',
            paddingTop: '0.75rem',
            display: 'grid',
            gap: '0.5rem'
          }}>
            <Link href="/evomanias" className="nav-link" style={{ padding: '0.5rem 0' }}>
              Home
            </Link>
            <Link href="/evomanias/highscores" className="nav-link" style={{ padding: '0.5rem 0' }}>
              Highscores
            </Link>
            <a href="#community" className="nav-link" style={{ padding: '0.5rem 0' }}>
              Community
            </a>
            <a href="#library" className="nav-link" style={{ padding: '0.5rem 0' }}>
              Library
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
