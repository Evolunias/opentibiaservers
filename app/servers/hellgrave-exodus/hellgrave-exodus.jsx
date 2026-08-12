import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-hellgrave-exodus",
  "slug": "hellgrave-exodus",
  "name": "Hellgrave Exodus",
  "host": "hellgrave.ots.me",
  "ip": "hellgrave.ots.me",
  "port": 7171,
  "location": "POLAND",
  "version": "10.98",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 91,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-10-98-custom-hellgrave-exodus-rl-map-start-26-12.303012/",
  "source_url": "https://otland.net/threads/poland-10-98-custom-hellgrave-exodus-rl-map-start-26-12.303012/",
  "website_url": "https://hellgrave.ots.me",
  "external_launch_url": "https://hellgrave.ots.me",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Hellgrave Exodus",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.653Z",
  "last_seen_at": "2025-12-09T11:55:04+0100",
  "last_check": "2026-07-28T02:51:27.653Z",
  "official_summary": "Hellgrave Exodus enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: POLAND, version hint: 10.98, server address: hellgrave.ots.me, port 7171, 26 replies, 5,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Hellgrave Exodus is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://hellgrave.ots.me",
    "Server address: hellgrave.ots.me",
    "Server port: 7171",
    "Thread author: maska1991",
    "Original post date: 12/9/2025",
    "Forum discussion: 26 replies",
    "Thread visibility: 5,000 views",
    "Parsed version/client hint: 10.98",
    "Parsed region hint: POLAND"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "POLAND",
    "10.98",
    "POLAND",
    "10.98",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://hellgrave.ots.me",
      "label": "Hellgrave Exodus official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-10-98-custom-hellgrave-exodus-rl-map-start-26-12.303012/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://hellgrave.ots.me",
      "label": "https://hellgrave.ots.me"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/4ab92a11450cbe2ef66c4cdb3c133fd1",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/a8789d1cc3d214897d1890dd63d6527a",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/69358adeb366614946d3402fb6010ba4",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/e753db3778a988bc771600e44423de45",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/acdc1f8a0e1698de0b61bf19d2802fb0",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Hellgrave Exodus verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://hellgrave.ots.me as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Hellgrave Exodus?",
      "answer": "Start with https://hellgrave.ots.me and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Hellgrave Exodus exposes https://hellgrave.ots.me from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this OtLand source matters",
      "body": "OtLand Server Gala is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
    },
    {
      "title": "What this page still needs from the community",
      "body": "This record should be expanded with owner-confirmed homepage links, screenshots, client/download details, rates, PvP rules, update history, Discord or forum links, and player reviews. Until those are verified, the page keeps source facts separate from missing details."
    }
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function HellgraveExodusServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
