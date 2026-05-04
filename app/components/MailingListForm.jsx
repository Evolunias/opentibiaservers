'use client';

import { useState } from 'react';
import './MailingListForm.css';

export default function MailingListForm() {
  const [emailName, setEmailName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handleMailingListSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setEmailSuccess(false);
    setEmailLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: emailName,
          email: emailAddress,
          character_name: characterName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setEmailSuccess(true);
      setEmailName('');
      setEmailAddress('');
      setCharacterName('');
      setTimeout(() => setEmailSuccess(false), 5000);
    } catch (err) {
      setEmailError(err.message || 'An error occurred. Please try again.');
    } finally {
      setEmailLoading(false);
    }
  };

  return (
    <div className="mailing-list-form-wrapper">
      <div className="newsletter-cta-banner">
        <div className="cta-excitement">🎁 ⚡ EXCLUSIVE ALERT ⚡ 🎁</div>
        <h3 className="cta-heading">Join the Evolisca Inner Circle Now!</h3>
        <p className="cta-description">
          Subscribe to our newsletter and unlock <span className="cta-highlight">PREMIUM POINT GIVEAWAYS</span> that are <span className="cta-highlight">exclusively</span> reserved for our mailing list members. Get hyped—premium rewards, early access to new commands, and community perks await you!
        </p>
      </div>
      <form onSubmit={handleMailingListSubmit} className="mailing-list-form-header">
        <input
          type="text"
          placeholder="Your Name"
          value={emailName}
          onChange={(e) => setEmailName(e.target.value)}
          required
          disabled={emailLoading}
          className="form-input-header"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required
          disabled={emailLoading}
          className="form-input-header"
        />
        <div className="input-wrapper-header">
          <input
            type="text"
            placeholder="Character Name"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            disabled={emailLoading}
            className="form-input-header"
          />
          <span className="optional-tag">Optional</span>
        </div>
        <button
          type="submit"
          disabled={emailLoading}
          className="submit-btn-header"
        >
          {emailLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {emailSuccess && (
        <div className="success-message-header">
          ✓ Successfully subscribed!
        </div>
      )}
      {emailError && (
        <div className="error-message-header">
          ✕ {emailError}
        </div>
      )}
    </div>
  );
}
