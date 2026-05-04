'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function CommandsBanner() {
  const [showItemPreview, setShowItemPreview] = useState(false);
  const [showMonsterPreview, setShowMonsterPreview] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* New Commands Notification Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 180, 0, 0.15) 0%, rgba(255, 100, 0, 0.15) 100%)',
        borderBottom: '2px solid rgba(255, 180, 0, 0.3)',
        padding: '12px 20px',
        textAlign: 'center',
        fontSize: '0.95rem',
        color: 'var(--text)',
      }}>
        <span style={{ marginRight: '12px' }}>{t('banner.new')}</span>
        <strong>{t('banner.new-commands')}</strong> {t('banner.use')}{' '}
        <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px', marginLeft: '4px', marginRight: '4px' }}>{t('banner.joinguild')}</code>
        {t('banner.for')}{' '}
        <button
          onClick={() => setShowItemPreview(true)}
          style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '2px 6px',
            borderRadius: '4px',
            marginLeft: '4px',
            marginRight: '4px',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 150, 0, 0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.3)'}
        >
          {t('banner.find-itemname')}
        </button>
        {' '}{t('banner.or')}{' '}
        <button
          onClick={() => setShowItemPreview(true)}
          style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '2px 6px',
            borderRadius: '4px',
            marginLeft: '4px',
            marginRight: '4px',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 150, 0, 0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.3)'}
        >
          {t('banner.finditem-itemname')}
        </button>
        {t('banner.search-item')}{' '}
        <button
          onClick={() => setShowMonsterPreview(true)}
          style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '2px 6px',
            borderRadius: '4px',
            marginLeft: '4px',
            marginRight: '4px',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 150, 0, 0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.3)'}
        >
          {t('banner.monster-monstername')}
        </button>
        {t('banner.open-window')}{' '}
        <Link href="/commands" style={{ textDecoration: 'none', color: 'var(--accent, #ff9500)', fontWeight: '600', marginLeft: '8px' }}>
          {t('banner.view-all')}
        </Link>
      </div>

      {/* Item Finder Preview Modal */}
      {showItemPreview && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '20px'
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
          }}>
            <button
              onClick={() => setShowItemPreview(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                cursor: 'pointer',
                color: '#fff',
                fontSize: '24px',
                padding: '8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                zIndex: 2001,
              }}
            >
              <X size={24} />
            </button>
            <img
              src="/item-finder-preview.webp"
              alt="Item Finder Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        </div>
      )}

      {/* Monster Inspector Preview Modal */}
      {showMonsterPreview && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '20px'
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
          }}>
            <button
              onClick={() => setShowMonsterPreview(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                cursor: 'pointer',
                color: '#fff',
                fontSize: '24px',
                padding: '8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                zIndex: 2001,
              }}
            >
              <X size={24} />
            </button>
            <img
              src="/monster-inspector-preview.webp"
              alt="Monster Inspector Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
