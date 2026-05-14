'use client';

import { useEvomaniasTheme } from '../context/EvomaniasThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme, isMounted } = useEvomaniasTheme();

  if (!isMounted) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      zIndex: 1000
    }}>
      <button
        onClick={toggleTheme}
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)'
            : 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
          border: 'none',
          color: 'white',
          padding: '0.75rem 1.25rem',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontSize: '0.875rem',
          boxShadow: theme === 'dark'
            ? '0 0 20px rgba(124, 184, 255, 0.3)'
            : '0 0 20px rgba(37, 99, 235, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.opacity = '0.9';
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = '1';
        }}
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
}
