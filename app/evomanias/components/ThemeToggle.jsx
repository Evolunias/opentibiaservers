'use client';

import { useEvomaniasTheme } from '../context/EvomaniasThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme, isMounted } = useEvomaniasTheme();

  if (!isMounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        background: 'none',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '8px',
        padding: '0.5rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        transition: 'all 0.3s ease',
        color: isDark ? 'rgba(124, 184, 255, 0.8)' : 'rgba(71, 85, 105, 0.8)',
      }}
    >
      {isDark ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 2px rgba(124, 184, 255, 0.3))' }}>
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 2px rgba(71, 85, 105, 0.2))' }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}
