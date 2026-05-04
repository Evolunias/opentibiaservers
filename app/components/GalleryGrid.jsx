'use client';

import { useState } from 'react';
import './GalleryGrid.css';

export default function GalleryGrid({ items, title, description }) {
  const [selectedItem, setSelectedItem] = useState(null);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="gallery-wrapper">
      <div className="gallery-header">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
      </div>

      <div className="gallery-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => setSelectedItem(item)}
          >
            <div className="gallery-card">
              {item.image ? (
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                </div>
              ) : (
                <div className="gallery-placeholder">
                  <span className="gallery-icon">📸</span>
                </div>
              )}
              <div className="gallery-info">
                <h4>{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="gallery-modal" onClick={() => setSelectedItem(null)}>
          <div className="gallery-modal-content">
            <button
              className="gallery-close"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>
            <div className="modal-inner">
              <div className="modal-image">
                {selectedItem.image ? (
                  <img src={selectedItem.image} alt={selectedItem.title} className="modal-image-content" />
                ) : (
                  <div className="image-placeholder">
                    <span>📸</span>
                  </div>
                )}
              </div>
              <div className="modal-info">
                <h3>{selectedItem.title}</h3>
                {selectedItem.tags && selectedItem.tags.length > 0 && (
                  <div className="modal-tags">
                    {selectedItem.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
                <p>{selectedItem.description}</p>
                {selectedItem.transcription && (
                  <div className="modal-transcription">
                    <h4>Description</h4>
                    <p>{selectedItem.transcription}</p>
                  </div>
                )}
                {selectedItem.details && (
                  <div className="modal-details">
                    <h4>Details</h4>
                    {typeof selectedItem.details === 'object' && !Array.isArray(selectedItem.details) ? (
                      <ul>
                        {Object.entries(selectedItem.details).map(([key, value]) => (
                          <li key={key}>
                            <strong>{key.replace(/_/g, ' ')}:</strong> {String(value)}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{JSON.stringify(selectedItem.details)}</p>
                    )}
                  </div>
                )}
                {selectedItem.tagline && (
                  <div className="modal-tagline">
                    <em>"{selectedItem.tagline}"</em>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
