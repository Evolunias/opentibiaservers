'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { translate } from '@/app/lib/translations';
import './CategoryDropdown.css';

export default function CategoryDropdown({ categories }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const { t } = useLanguage();

  // Sort categories alphabetically by their translated names
  const sortedCategories = [...categories].sort((a, b) =>
    t(a.nameKey).localeCompare(t(b.nameKey))
  );

  // Define navigation items with dropdowns
  const navItems = [
    {
      id: 'categories',
      labelKey: 'dropdown.categories',
      items: sortedCategories.map(cat => ({
        nameKey: cat.nameKey,
        href: cat.href
      }))
    },
    {
      id: 'quests',
      labelKey: 'dropdown.quests',
      items: [
        { nameKey: 'dropdown.all-quests', href: '/quests' },
        { nameKey: 'dropdown.npc-quests', href: '/npc-quests' }
      ]
    },
    {
      id: 'bosses',
      labelKey: 'dropdown.bosses',
      items: [
        { nameKey: 'dropdown.bosses', href: '/bosses' },
        { nameKey: 'dropdown.raids', href: '/raids' }
      ]
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTranslatedName = (item) => {
    return t(item.nameKey) || item.nameKey;
  };

  return (
    <nav className="category-nav-bar" aria-label="Main Navigation">
      <div className="nav-dropdowns-container" ref={dropdownRef}>
        {navItems.map((navItem) => (
          <div key={navItem.id} className="category-dropdown-container">
            <button
              className="category-dropdown-toggle"
              onClick={() => setOpenDropdown(openDropdown === navItem.id ? null : navItem.id)}
              aria-expanded={openDropdown === navItem.id}
              aria-haspopup="true"
            >
              <span>{t(navItem.labelKey)}</span>
              <ChevronDown className={`dropdown-icon ${openDropdown === navItem.id ? 'open' : ''}`} />
            </button>

            {openDropdown === navItem.id && (
              <div className="category-dropdown-menu">
                {navItem.items.map((item, idx) => (
                  <a
                    key={`${item.href}-${idx}`}
                    href={item.href}
                    className="category-dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                    {...(item.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                  >
                    {getTranslatedName(item)}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
