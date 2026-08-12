import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-shadow-of-the-crown",
  "slug": "shadow-of-the-crown",
  "name": "Shadow of The Crown",
  "host": "shadowofthecrown.co.uk",
  "ip": "shadowofthecrown.co.uk",
  "port": 7171,
  "location": "UK",
  "version": "7.7",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 107,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/uk-custom-7-4-higher-rate-shadow-of-the-crown-new-reset-official-launch-07-01-2026-14-00-gmt.303603/",
  "source_url": "https://otland.net/threads/uk-custom-7-4-higher-rate-shadow-of-the-crown-new-reset-official-launch-07-01-2026-14-00-gmt.303603/",
  "website_url": "https://shadowofthecrown.co.uk/",
  "external_launch_url": "https://shadowofthecrown.co.uk/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Shadow of The Crown",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.652Z",
  "last_seen_at": "2026-01-03T11:28:03+0100",
  "last_check": "2026-07-28T02:51:27.652Z",
  "official_summary": "Shadow of The Crown enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: UK, version hint: 7.7, server address: shadowofthecrown.co.uk, port 7171, 11 replies, 2,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Shadow of The Crown is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://shadowofthecrown.co.uk/",
    "Server address: shadowofthecrown.co.uk",
    "Server port: 7171",
    "Thread author: Ischemia",
    "Original post date: 1/3/2026",
    "Forum discussion: 11 replies",
    "Thread visibility: 2,000 views",
    "Parsed version/client hint: 7.7",
    "Parsed region hint: UK"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "UK",
    "7.7",
    "UK",
    "Custom 7.4",
    "Higher rate",
    "New reset",
    "Official launch 07/01/2026 14:00 GMT"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://shadowofthecrown.co.uk/",
      "label": "Shadow of The Crown official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/uk-custom-7-4-higher-rate-shadow-of-the-crown-new-reset-official-launch-07-01-2026-14-00-gmt.303603/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://shadowofthecrown.co.uk/",
      "label": "https://shadowofthecrown.co.uk/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/4c2eba6d1fadb575ed6b228021945f65",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Shadow of The Crown verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://shadowofthecrown.co.uk/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Shadow of The Crown?",
      "answer": "Start with https://shadowofthecrown.co.uk/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Shadow of The Crown exposes https://shadowofthecrown.co.uk/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function ShadowOfTheCrownServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
