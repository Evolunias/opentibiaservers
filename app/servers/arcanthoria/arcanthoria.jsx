import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-arcanthoria",
  "slug": "arcanthoria",
  "name": "Arcanthoria",
  "host": "arcanthoria.com",
  "ip": "arcanthoria.com",
  "port": 7171,
  "location": "Poland",
  "version": "8.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 121,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-8-6-arcanthoria.303485/",
  "source_url": "https://otland.net/threads/poland-8-6-arcanthoria.303485/",
  "website_url": "http://arcanthoria.com/",
  "external_launch_url": "http://arcanthoria.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Arcanthoria",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2025-12-25T13:20:03+0100",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "Arcanthoria enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 8.6, server address: arcanthoria.com, port 7171, 4 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Arcanthoria is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: http://arcanthoria.com/",
    "Server address: arcanthoria.com",
    "Server port: 7171",
    "Thread author: koniu909",
    "Original post date: 12/25/2025",
    "Forum discussion: 4 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 8.6",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "8.6",
    "Poland",
    "8.6"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "http://arcanthoria.com/",
      "label": "Arcanthoria official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-8-6-arcanthoria.303485/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "http://arcanthoria.com/",
      "label": "http://arcanthoria.com/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Arcanthoria verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes http://arcanthoria.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Arcanthoria?",
      "answer": "Start with http://arcanthoria.com/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Arcanthoria exposes http://arcanthoria.com/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function ArcanthoriaServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
