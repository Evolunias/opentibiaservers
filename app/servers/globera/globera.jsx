import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-globera",
  "slug": "globera",
  "name": "Globera",
  "host": "globera.net",
  "ip": "globera.net",
  "port": 7171,
  "location": "Poland",
  "version": "7",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 95,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-7-92-globera.290626/",
  "source_url": "https://otland.net/threads/poland-7-92-globera.290626/",
  "website_url": "https://globera.net",
  "external_launch_url": "https://globera.net",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Globera",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.139Z",
  "last_seen_at": "2024-12-12T22:16:38+0100",
  "last_check": "2026-07-28T02:51:27.139Z",
  "official_summary": "Globera enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 7, server address: globera.net, port 7171, 21 replies, 2,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Globera is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://globera.net",
    "Server address: globera.net",
    "Server port: 7171",
    "Thread author: anyeor",
    "Original post date: 12/13/2024",
    "Forum discussion: 21 replies",
    "Thread visibility: 2,000 views",
    "Parsed version/client hint: 7",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "7",
    "Poland",
    "7.92"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://globera.net",
      "label": "Globera official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-7-92-globera.290626/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://globera.net",
      "label": "https://globera.net"
    },
    {
      "type": "source_link",
      "url": "https://www.youtube.com/c/RookgaardAdventure",
      "label": "RookgaardAdventure"
    }
  ],
  "faq_items": [
    {
      "question": "Is Globera verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://globera.net as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Globera?",
      "answer": "Start with https://globera.net and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Globera exposes https://globera.net from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://www.youtube.com/c/RookgaardAdventure. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function GloberaServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
