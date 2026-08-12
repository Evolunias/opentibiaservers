import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-oldheart-online",
  "slug": "oldheart-online",
  "name": "OldHeart Online",
  "host": "login.oldheart.online",
  "ip": "login.oldheart.online",
  "port": 7300,
  "location": "USA",
  "version": "8.0",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 29,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-8-0-oldheart-online-rl-map-april-10-launch-low-rates-anti-macro-bot.304296/",
  "source_url": "https://otland.net/threads/usa-8-0-oldheart-online-rl-map-april-10-launch-low-rates-anti-macro-bot.304296/",
  "website_url": "https://join.oldheart.online",
  "external_launch_url": "https://join.oldheart.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "OldHeart Online",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.195Z",
  "last_seen_at": "2026-04-05T17:28:03+0200",
  "last_check": "2026-07-28T02:51:26.195Z",
  "official_summary": "OldHeart Online enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 8.0, server address: login.oldheart.online, port 7300, official website reachable during import, 38 replies, 4,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "OldHeart Online is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://join.oldheart.online",
    "Official website responded with HTTP 200",
    "Server address: login.oldheart.online",
    "Server port: 7300",
    "Thread author: Mythh OldHeart",
    "Original post date: 4/5/2026",
    "Forum discussion: 38 replies",
    "Thread visibility: 4,000 views",
    "Parsed version/client hint: 8.0",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "8.0",
    "USA",
    "8.0"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://join.oldheart.online",
      "label": "OldHeart Online official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-8-0-oldheart-online-rl-map-april-10-launch-low-rates-anti-macro-bot.304296/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://join.oldheart.online",
      "label": "https://join.oldheart.online"
    }
  ],
  "faq_items": [
    {
      "question": "Is OldHeart Online verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://join.oldheart.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm OldHeart Online?",
      "answer": "Start with https://join.oldheart.online and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "OldHeart Online exposes https://join.oldheart.online from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function OldheartOnlinePage() {
  return <CuratedGuideArticle page={page} />;
}
