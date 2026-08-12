import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-oxygenot",
  "slug": "oxygenot",
  "name": "OxygenOT",
  "host": "login.oxygenot.live",
  "ip": "login.oxygenot.live",
  "port": 7171,
  "location": "Germany",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 10,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/germany-custom-oxygenot-evo-season-ix.288873/",
  "source_url": "https://otland.net/threads/germany-custom-oxygenot-evo-season-ix.288873/",
  "website_url": "https://oxygenot.live",
  "external_launch_url": "https://oxygenot.live",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "OxygenOT",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.239Z",
  "last_seen_at": "2024-05-02T00:01:12+0200",
  "last_check": "2026-07-28T02:51:23.239Z",
  "official_summary": "OxygenOT enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 8, server address: login.oxygenot.live, port 7171, official website reachable during import, 180 replies, 28,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "OxygenOT is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://oxygenot.live",
    "Official website responded with HTTP 200",
    "Server address: login.oxygenot.live",
    "Server port: 7171",
    "Thread author: MohamedRefaat",
    "Original post date: 5/2/2024",
    "Forum discussion: 180 replies",
    "Thread visibility: 28,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Germany",
    "8",
    "Germany",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://oxygenot.live",
      "label": "OxygenOT official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/germany-custom-oxygenot-evo-season-ix.288873/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://oxygenot.live",
      "label": "https://oxygenot.live"
    }
  ],
  "faq_items": [
    {
      "question": "Is OxygenOT verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://oxygenot.live as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm OxygenOT?",
      "answer": "Start with https://oxygenot.live and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "OxygenOT exposes https://oxygenot.live from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function OxygenotServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
