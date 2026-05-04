'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import './FeaturedItems.css';

const FEATURED_ITEMS = [
  {
    id: '46934',
    name: 'Cursed Crimsonevil Backpack',
    image: '/images/featured-items/cursed-crimsonevil-backpack-main.webp',
    type: 'Backpack',
    lightboxImages: [
      '/images/featured-items/cursed-crimsonevil-backpack-01.webp',
      '/images/featured-items/cursed-crimsonevil-backpack-02.webp',
    ],
    attributes: {
      'Container Size': '52',
      'Absorption %': '3',
      'Weapon Attack': '+22',
      'Critical Hit Chance': '6',
      'Critical Hit Damage': '12',
      'Life Leech': '4',
      'Mana Leech': '4',
      'Max HP %': '108',
      'Max Mana %': '108',
      'Weight': '2100',
    },
  },
  {
    id: '46925',
    name: 'Draconic Backpack',
    image: '/images/featured-items/draconic-backpack-main.webp',
    type: 'Backpack',
    lightboxImages: [
      '/images/featured-items/draconic-backpack-01.webp',
      '/images/featured-items/draconic-backpack-02.webp',
    ],
    attributes: {
      'Container Size': '60',
      'Absorption %': '4',
      'Weapon Attack': '+30',
      'Critical Hit Chance': '8',
      'Critical Hit Damage': '16',
      'Skill Distance': '+10',
      'Skill Sword': '+10',
      'Damage Increase': '12',
      'Max HP %': '110',
      'Max Mana %': '110',
      'Weight': '2300',
    },
  },
  {
    id: '46463',
    name: 'Violet Eye Amulet',
    image: '/images/featured-items/violet-eye-amulet-main.webp',
    type: 'Necklace',
    lightboxImages: [
      '/images/featured-items/violet-eye-amulet-01.webp',
      '/images/featured-items/violet-eye-amulet-02.webp',
    ],
    attributes: {
      'Health Regeneration': '420 per second',
      'Mana Regeneration': '420 per second',
      'Max HP %': '109',
      'Max Mana %': '109',
      'Critical Hit Chance': '4',
      'Magic Points': '+5',
      'Weapon Attack': '+14',
      'Weight': '1200',
    },
  },
  {
    id: '46938',
    name: 'Eternal Ankh (Charm)',
    image: '/images/featured-items/eternal-ankh-charm-main.webp',
    type: 'Charm',
    lightboxImages: [
      '/images/featured-items/eternal-ankh-charm-01.webp',
      '/images/featured-items/eternal-ankh-charm-02.webp',
    ],
    attributes: {
      'Reduce Skill Loss': '25',
      'Health Regeneration': '450 per second',
      'Mana Regeneration': '450 per second',
      'Max HP %': '108',
      'Max Mana %': '108',
      'Life Leech': '4',
      'Mana Leech': '4',
      'Weapon Attack': '+12',
      'Weight': '1200',
      'Note': 'charm_note',
    },
  },
  {
    id: '46462',
    name: 'Amulet Of Red Skull',
    image: '/images/featured-items/amulet-of-red-skull-main.webp',
    type: 'Necklace',
    lightboxImages: [
      '/images/featured-items/amulet-of-red-skull-01.webp',
      '/images/featured-items/amulet-of-red-skull-02.webp',
    ],
    attributes: {
      'Reduce Skill Loss': '18',
      'Health Regeneration': '380 per second',
      'Mana Regeneration': '380 per second',
      'Max HP %': '107',
      'Max Mana %': '107',
      'Damage Reduction': '4',
      'Weapon Attack': '+10',
      'Weight': '1200',
    },
  },
  {
    id: '46845',
    name: 'Necromancy Signed Contract (Charm)',
    image: '/images/featured-items/necromancy-signed-contract-charm-main.webp',
    type: 'Charm',
    lightboxImages: [
      '/images/featured-items/necromancy-signed-contract-charm-01.webp',
      '/images/featured-items/necromancy-signed-contract-charm-02.webp',
    ],
    attributes: {
      'Max Mana %': '112',
      'Magic Points': '+10',
      'Critical Hit Chance': '6',
      'Critical Hit Damage': '12',
      'Mana Rune Increase': '+10',
      'Weapon Attack': '+28',
      'Weight': '950',
      'Note': 'charm_note',
    },
  },
  {
    id: '46869',
    name: 'Tentacle Lute (Charm)',
    image: '/images/featured-items/tentacle-lute-charm-main.webp',
    type: 'Charm',
    lightboxImages: [
      '/images/featured-items/tentacle-lute-charm-01.webp',
      '/images/featured-items/tentacle-lute-charm-02.webp',
    ],
    attributes: {
      'Max Mana %': '110',
      'Magic Points': '+8',
      'Mana Rune Increase': '+8',
      'Critical Hit Chance': '4',
      'Mana Leech': '5',
      'Weapon Attack': '+22',
      'Attack Speed': '+4',
      'Weight': '900',
      'Note': 'charm_note',
    },
  },
  {
    id: '46135',
    name: 'Arodis Magical Board (Charm)',
    image: '/images/featured-items/arodis-magical-board-charm-main.webp',
    type: 'Charm',
    lightboxImages: [
      '/images/featured-items/arodis-magical-board-charm-01.webp',
      '/images/featured-items/arodis-magical-board-charm-02.webp',
    ],
    attributes: {
      'Max HP %': '110',
      'Max Mana %': '110',
      'Life Leech': '4',
      'Mana Leech': '4',
      'Damage Reduction': '4',
      'Dodge': '4',
      'Weapon Attack': '+22',
      'Weight': '900',
      'Note': 'charm_note',
    },
  },
  {
    id: '46490',
    name: 'Khufu Hand (Charm)',
    image: '/images/featured-items/khufu-hand-charm-main.webp',
    type: 'Charm',
    attributes: {
      'Max HP %': '116',
      'Max Mana %': '116',
      'Damage Increase': '12',
      'Damage Reduction': '6',
      'Critical Hit Chance': '7',
      'Attack Speed': '+7',
      'Skill Distance': '+8',
      'Skill Sword': '+8',
      'Magic Points': '+8',
      'Weapon Attack': '+36',
      'Weight': '1000',
      'Note': 'charm_note',
    },
  },
  {
    id: '46834',
    name: 'Arbaziloth Santa Figure (Charm)',
    image: '/images/featured-items/arbaziloth-santa-figure-charm-main.webp',
    type: 'Charm',
    lightboxImages: [
      '/images/featured-items/arbaziloth-santa-figure-charm-01.webp',
      '/images/featured-items/arbaziloth-santa-figure-charm-02.webp',
    ],
    attributes: {
      'Max HP %': '112',
      'Max Mana %': '110',
      'Life Leech': '6',
      'Mana Leech': '6',
      'Attack Speed': '+6',
      'Weapon Attack': '+28',
      'Weight': '950',
      'Note': 'charm_note',
    },
  },
  {
    id: '46846',
    name: 'Demonic Contract Figure (Charm)',
    image: '/images/featured-items/demonic-contract-figure-charm-main.webp',
    type: 'Charm',
    lightboxImages: [
      '/images/featured-items/demonic-contract-figure-charm-01.webp',
      '/images/featured-items/demonic-contract-figure-charm-02.webp',
    ],
    attributes: {
      'Max HP %': '115',
      'Max Mana %': '115',
      'Critical Hit Chance': '8',
      'Critical Hit Damage': '18',
      'Life Leech': '8',
      'Mana Leech': '8',
      'Dodge': '6',
      'Weapon Attack': '+34',
      'Weight': '1000',
      'Note': 'charm_note',
    },
  },
  {
    id: '40941',
    name: 'Cosmic Legs',
    type: 'Legs',
    attributes: {
      'Armor': '15',
      'Weight': '1900',
    },
  },
  {
    id: '36451',
    name: 'Soulring',
    type: 'Ring',
    attributes: {
      'Dodge': '5',
      'Weight': '80',
    },
  },
];

export default function FeaturedItems() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const { t } = useLanguage();

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedImageIndex(0);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedItem]);

  return (
    <section className="featured-items-section content-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{t('featured.eyebrow')}</span>
          <h2>{t('featured.title')}</h2>
        </div>
        <p>{t('featured.description')}</p>
      </div>

      <div className="featured-items-grid">
        {FEATURED_ITEMS.map((item) => (
          <div
            key={item.id}
            className="featured-item-card-wrapper"
            onMouseEnter={() => setHoveredCardId(item.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <button
              onClick={() => handleItemClick(item)}
              className="featured-item-card"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <article className="panel item-display">
                {item.image && (
                  <div className="item-image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="item-info">
                  <div className="item-header">
                    <h3>{item.name}</h3>
                    <span className="item-type chip">{item.type}</span>
                  </div>

                  <div className="item-attributes">
                    {Object.entries(item.attributes).map(([key, value]) => (
                      <div key={key} className="attribute-row">
                        <span className="attribute-label">{key}:</span>
                        <span className="attribute-value">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="item-cta">
                    {t('featured.explore-cta')}
                  </div>
                </div>
              </article>

              {/* Click hint overlay */}
              {hoveredCardId === item.id && (
                <div className="item-click-hint">
                  <div className="hint-text-primary">{t('featured.tap-explore')}</div>
                  <div className="hint-text-secondary">{t('featured.view-specs')}</div>
                </div>
              )}
            </button>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setSelectedItem(null)}
        >
          {selectedItem.lightboxImages ? (
            // Lightbox view for items with lightbox images
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '100vw',
                maxHeight: '100vh',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.lightboxImages[selectedImageIndex]}
                alt={`${selectedItem.name} ${selectedImageIndex + 1}`}
                style={{
                  maxHeight: '90vh',
                  maxWidth: '98vw',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '12px',
                }}
              />

              {/* Close button - positioned at top-left outside image */}
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  position: 'fixed',
                  top: '2rem',
                  right: '2rem',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  color: '#fff',
                  fontSize: '2.5rem',
                  cursor: 'pointer',
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  fontWeight: '300',
                  zIndex: 10000,
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.9)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.7)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                ×
              </button>

              {/* Previous button */}
              {selectedImageIndex > 0 && (
                <button
                  onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
                  style={{
                    position: 'absolute',
                    left: '-4rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                >
                  ‹
                </button>
              )}

              {/* Next button */}
              {selectedImageIndex < selectedItem.lightboxImages.length - 1 && (
                <button
                  onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
                  style={{
                    position: 'absolute',
                    right: '-4rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                >
                  ›
                </button>
              )}

              {/* Image counter */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2.5rem',
                  color: '#aaa',
                  fontSize: '0.875rem',
                }}
              >
                {selectedImageIndex + 1} / {selectedItem.lightboxImages.length}
              </div>
            </div>
          ) : (
            // Standard detail view for other items
            <div
              style={{
                background: '#1a1a1a',
                borderRadius: '8px',
                padding: '2rem',
                maxWidth: '600px',
                width: '90%',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
                color: '#fff',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  position: 'fixed',
                  top: '2rem',
                  right: '2rem',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  color: '#fff',
                  fontSize: '2.5rem',
                  cursor: 'pointer',
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  fontWeight: '300',
                  zIndex: 10000,
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.9)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.7)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                ×
              </button>

              {selectedItem.image && (
                <div style={{ marginBottom: '2rem', maxHeight: '65vh', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '65vh',
                      width: 'auto',
                      height: 'auto',
                      borderRadius: '8px',
                      border: '2px solid #444',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              )}

              <div style={{ paddingRight: '2rem' }}>
                <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{selectedItem.name}</h2>
                <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>{selectedItem.type}</p>

                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {Object.entries(selectedItem.attributes).map(([key, value]) => {
                    const displayValue = key === 'Note' && value === 'charm_note' ? t('featured.charm-note') : value;
                    return (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                        <span style={{ color: '#aaa' }}>{key}:</span>
                        <span style={{ fontWeight: 'bold' }}>{displayValue}</span>
                      </div>
                    );
                  })}
                </div>

                <p style={{ color: '#999', fontSize: '0.875rem', marginTop: '1.5rem', textAlign: 'center' }}>
                  Press Escape or click outside to close
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
