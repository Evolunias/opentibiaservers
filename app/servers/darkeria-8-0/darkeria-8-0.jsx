import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-darkeria-8-0",
  "slug": "darkeria-8-0",
  "name": "Darkeria 8.0",
  "host": "www.darkeriaonline.com",
  "ip": "www.darkeriaonline.com",
  "port": 7171,
  "location": "Canada",
  "version": "8.00",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 96,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/canada-custom-darkeria-8-0-low-rates-long-term-launch-03-04.304232/",
  "source_url": "https://otland.net/threads/canada-custom-darkeria-8-0-low-rates-long-term-launch-03-04.304232/",
  "website_url": "https://www.darkeriaonline.com",
  "external_launch_url": "https://www.darkeriaonline.com",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Darkeria 8.0",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.692Z",
  "last_seen_at": "2026-03-29T03:27:56+0200",
  "last_check": "2026-07-28T02:51:25.692Z",
  "official_summary": "Darkeria 8.0 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Canada, version hint: 8.00, server address: www.darkeriaonline.com, port 7171, 19 replies, 3,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Darkeria 8.0 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://www.darkeriaonline.com",
    "Server address: www.darkeriaonline.com",
    "Server port: 7171",
    "Thread author: shrugdarkeria",
    "Original post date: 3/29/2026",
    "Forum discussion: 19 replies",
    "Thread visibility: 3,000 views",
    "Parsed version/client hint: 8.00",
    "Parsed region hint: Canada"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Canada",
    "8.00",
    "Canada",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://www.darkeriaonline.com",
      "label": "Darkeria 8.0 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/canada-custom-darkeria-8-0-low-rates-long-term-launch-03-04.304232/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://www.darkeriaonline.com",
      "label": "https://www.darkeriaonline.com"
    },
    {
      "type": "source_link",
      "url": "http://www.darkeriaonline.com",
      "label": "www.darkeriaonline.com"
    }
  ],
  "faq_items": [
    {
      "question": "Is Darkeria 8.0 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://www.darkeriaonline.com as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Darkeria 8.0?",
      "answer": "Start with https://www.darkeriaonline.com and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Darkeria 8.0 exposes https://www.darkeriaonline.com from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Darkeria80ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
