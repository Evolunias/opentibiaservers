'use client';

import Link from 'next/link';
import { useEvomaniasAuth } from '../../context/EvomaniasAuthContext';
import { useEvomaniasTheme } from '../context/EvomaniasThemeContext';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

export default function EvomaniasHeader() {
  const { account } = useEvomaniasAuth();
  const { theme } = useEvomaniasTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isDark = theme === 'dark';

  const headerStyle = isDark
    ? {
        background: 'rgba(20, 20, 25, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      }
    : {
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(71, 85, 105, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      };

  return (
    <>
      {/* Fixed Theme Toggle - Top Right */}
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 9999
      }}>
        <ThemeToggle />
      </div>

      <header className="navbar" style={headerStyle}>
        <div className="max-w-7xl mx-auto px-6 py-3 w-full">
          {/* Main Navigation Row */}
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/evomanias" className="flex items-center gap-2 hover:opacity-80 transition flex-shrink-0">
              <h1
                className="text-xl font-bold"
                style={{
                  color: isDark ? '#7cb8ff' : '#2563eb',
                  letterSpacing: '1px',
                  transition: 'color 0.3s ease'
                }}
              >
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
                background: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(37, 99, 235, 0.05)',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(37, 99, 235, 0.2)',
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
                    color: isDark ? 'rgba(255, 255, 255, 0.95)' : 'rgba(31, 41, 55, 0.95)',
                    outline: 'none',
                    flex: 1,
                    fontSize: '0.875rem',
                    padding: '0.25rem 0.5rem'
                  }}
                />
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: isDark ? 'rgba(124, 184, 255, 0.7)' : '#2563eb',
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
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      background: isDark ? 'rgba(100, 181, 246, 0.12)' : 'rgba(37, 99, 235, 0.08)',
                      color: isDark ? '#64b5f6' : '#2563eb',
                      border: isDark ? '1.5px solid #64b5f6' : '1.5px solid #2563eb',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/evomanias/register"
                    className="btn btn-primary"
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      background: isDark
                        ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                        : 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isDark
                        ? '0 4px 12px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(124, 184, 255, 0.2)'
                        : '0 4px 12px rgba(37, 99, 235, 0.25), 0 0 0 1px rgba(37, 99, 235, 0.1)'
                    }}
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
                  <div className="hidden sm:block" style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingLeft: '0.75rem',
                    marginLeft: '0.75rem'
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
    </>
  );
}
