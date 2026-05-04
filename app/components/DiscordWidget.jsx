'use client';

import { useState, useEffect } from 'react';
import './DiscordWidget.css';

export default function DiscordWidget({ variant = 'compact' }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const discordInviteUrl = 'https://discord.gg/nctS38GU5';

  if (variant === 'compact') {
    // Compact version for header
    return (
      <a
        href={discordInviteUrl}
        target="_blank"
        rel="noreferrer"
        className="discord-widget-compact"
        title="Join our Discord community"
      >
        <svg
          className="discord-icon"
          viewBox="0 0 127.14 96.36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A99.68,99.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0A105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a77.15,77.15,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.73,105.73,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60.55,31,53.88s5-11.81,11.45-11.81S53.9,47.21,53.9,53.88,48.9,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60.55,73.25,53.88s5-11.81,11.44-11.81S95.34,47.21,95.34,53.88,90.25,65.69,84.69,65.69Z"
          />
        </svg>
        <span>Discord</span>
      </a>
    );
  }

  // Full widget version for footer
  return (
    <div className="discord-widget-full">
      <div className="discord-widget-header">
        <svg
          className="discord-logo"
          viewBox="0 0 127.14 96.36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A99.68,99.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0A105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a77.15,77.15,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.73,105.73,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60.55,31,53.88s5-11.81,11.45-11.81S53.9,47.21,53.9,53.88,48.9,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60.55,73.25,53.88s5-11.81,11.44-11.81S95.34,47.21,95.34,53.88,90.25,65.69,84.69,65.69Z"
          />
        </svg>
        <h4>Join Our Community</h4>
      </div>
      <div className="discord-widget-content">
        <p className="discord-description">
          Connect with other Evolisca adventurers, share strategies, and stay updated with the latest news.
        </p>
        <a href={discordInviteUrl} target="_blank" rel="noreferrer" className="discord-join-button">
          Join Discord
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
