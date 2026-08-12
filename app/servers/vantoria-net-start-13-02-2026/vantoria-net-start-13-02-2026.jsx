import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-vantoria-net-start-13-02-2026",
  "slug": "vantoria-net-start-13-02-2026",
  "name": "Vantoria.net start 13.02.2026",
  "host": "vantoria.net",
  "ip": "vantoria.net",
  "port": 7171,
  "location": "Poland",
  "version": "15",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 115,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-15-11-vantoria-net-start-13-02-2026.303845/",
  "source_url": "https://otland.net/threads/poland-15-11-vantoria-net-start-13-02-2026.303845/",
  "website_url": "https://vantoria.net/",
  "external_launch_url": "https://vantoria.net/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Vantoria.net start 13.02.2026",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.139Z",
  "last_seen_at": "2026-02-06T13:32:04+0100",
  "last_check": "2026-07-28T02:51:27.139Z",
  "official_summary": "Vantoria.net start 13.02.2026 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 15, server address: vantoria.net, port 7171, 7 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Vantoria.net start 13.02.2026 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://vantoria.net/",
    "Server address: vantoria.net",
    "Server port: 7171",
    "Thread author: 545658",
    "Original post date: 2/6/2026",
    "Forum discussion: 7 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 15",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "15",
    "Poland",
    "15.11"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://vantoria.net/",
      "label": "Vantoria.net start 13.02.2026 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-15-11-vantoria-net-start-13-02-2026.303845/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://vantoria.net/",
      "label": "https://vantoria.net/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/mrc1333",
      "label": "mrc1333"
    }
  ],
  "faq_items": [
    {
      "question": "Is Vantoria.net start 13.02.2026 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://vantoria.net/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Vantoria.net start 13.02.2026?",
      "answer": "Start with https://vantoria.net/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Vantoria.net start 13.02.2026 exposes https://vantoria.net/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function VantoriaNetStart13022026ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
