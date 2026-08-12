import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-oblema-7-4-server",
  "slug": "oblema-7-4-server",
  "name": "Oblema 7.4 Server",
  "host": "oblema.com",
  "ip": "oblema.com",
  "port": 7171,
  "location": "USA",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 108,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-7-4-oblema-7-4-server.303926/",
  "source_url": "https://otland.net/threads/usa-7-4-oblema-7-4-server.303926/",
  "website_url": "https://oblema.com/",
  "external_launch_url": "https://oblema.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Oblema 7.4 Server",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.658Z",
  "last_seen_at": "2026-02-14T19:46:21+0100",
  "last_check": "2026-07-28T02:51:26.658Z",
  "official_summary": "Oblema 7.4 Server enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.4, server address: oblema.com, port 7171, 10 replies, 2,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Oblema 7.4 Server is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://oblema.com/",
    "Server address: oblema.com",
    "Server port: 7171",
    "Thread author: rapsoi",
    "Original post date: 2/15/2026",
    "Forum discussion: 10 replies",
    "Thread visibility: 2,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "7.4",
    "USA",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://oblema.com/",
      "label": "Oblema 7.4 Server official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-7-4-oblema-7-4-server.303926/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://oblema.com/",
      "label": "https://oblema.com/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Ryndean",
      "label": "Ryndean"
    }
  ],
  "faq_items": [
    {
      "question": "Is Oblema 7.4 Server verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://oblema.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Oblema 7.4 Server?",
      "answer": "Start with https://oblema.com/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Oblema 7.4 Server exposes https://oblema.com/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Oblema74ServerServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
