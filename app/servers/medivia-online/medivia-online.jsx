import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-medivia-online",
  "slug": "medivia-online",
  "name": "Medivia Online",
  "host": "medivia.online",
  "ip": "medivia.online",
  "port": 7171,
  "location": "USA",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 82,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-custom-medivia-online-prosperity-hotkeys-highrate-17-october-2025-20-00-cest.300843/",
  "source_url": "https://otland.net/threads/usa-custom-medivia-online-prosperity-hotkeys-highrate-17-october-2025-20-00-cest.300843/",
  "website_url": "https://medivia.online",
  "external_launch_url": "https://medivia.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Medivia Online",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.803Z",
  "last_seen_at": "2025-10-14T20:33:14+0200",
  "last_check": "2026-07-28T02:51:23.803Z",
  "official_summary": "Medivia Online enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.4, server address: medivia.online, port 7171, 62 replies, 9,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Medivia Online is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://medivia.online",
    "Server address: medivia.online",
    "Server port: 7171",
    "Thread author: Hurion",
    "Original post date: 10/15/2025",
    "Forum discussion: 62 replies",
    "Thread visibility: 9,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "7.4",
    "USA",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://medivia.online",
      "label": "Medivia Online official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-custom-medivia-online-prosperity-hotkeys-highrate-17-october-2025-20-00-cest.300843/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://medivia.online",
      "label": "https://medivia.online"
    },
    {
      "type": "source_link",
      "url": "https://www.youtube.com/c/CBDingen",
      "label": "CBDingen"
    }
  ],
  "faq_items": [
    {
      "question": "Is Medivia Online verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://medivia.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Medivia Online?",
      "answer": "Start with https://medivia.online and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Medivia Online exposes https://medivia.online from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://www.youtube.com/c/CBDingen. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function MediviaOnlineServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
