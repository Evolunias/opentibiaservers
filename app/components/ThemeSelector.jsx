'use client';

import { useEffect, useState } from 'react';

export const OTS_THEMES = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
  { id: 'classic', label: 'Classic' },
  { id: 'midnight', label: 'Midnight' },
  { id: 'forest', label: 'Forest' },
  { id: 'ocean', label: 'Ocean' },
  { id: 'sunset', label: 'Sunset' },
  { id: 'grayscale', label: 'Grayscale' },
  { id: 'neon', label: 'Neon' },
  { id: 'arcane', label: 'Arcane' },
];

export const OTS_THEME_STORAGE_KEY = 'ots_theme';
const DEFAULT_THEME = 'light';

export function applyTheme(themeId) {
  if (typeof document === 'undefined') return;
  const valid = OTS_THEMES.some((t) => t.id === themeId) ? themeId : DEFAULT_THEME;
  document.documentElement.setAttribute('data-theme', valid);
  document.documentElement.style.colorScheme =
    valid === 'light' || valid === 'classic' || valid === 'sunset' ? 'light' : 'dark';
  try {
    localStorage.setItem(OTS_THEME_STORAGE_KEY, valid);
  } catch (_) {}
}

export default function ThemeSelector() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    let saved = DEFAULT_THEME;
    try {
      saved = localStorage.getItem(OTS_THEME_STORAGE_KEY) || DEFAULT_THEME;
    } catch (_) {}
    if (!OTS_THEMES.some((t) => t.id === saved)) saved = DEFAULT_THEME;
    setTheme(saved);
    applyTheme(saved);
  }, []);

  return (
    <div className="theme-selector">
      <label htmlFor="theme-selector" className="sr-only">
        Theme
      </label>
      <select
        id="theme-selector"
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
          applyTheme(e.target.value);
        }}
        className="theme-selector__select"
        aria-label="Site color theme"
      >
        {OTS_THEMES.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}