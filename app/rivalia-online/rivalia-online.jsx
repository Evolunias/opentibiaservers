import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-rivalia-online",
  "slug": "rivalia-online",
  "name": "Rivalia Online",
  "host": "rivaliaonline.com",
  "ip": "rivaliaonline.com",
  "port": 7171,
  "location": "USA",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 21,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-7-4-rivalia-online-february-20th-proxies-artifacts-attributes-cyclopedia-custom-areas.303916/",
  "source_url": "https://otland.net/threads/usa-7-4-rivalia-online-february-20th-proxies-artifacts-attributes-cyclopedia-custom-areas.303916/",
  "website_url": "https://rivaliaonline.com/",
  "external_launch_url": "https://rivaliaonline.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Rivalia Online",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.139Z",
  "last_seen_at": "2026-05-14T08:41:02+0200",
  "last_check": "2026-07-28T02:51:27.139Z",
  "official_summary": "Rivalia Online enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.4, server address: rivaliaonline.com, port 7171, official website reachable during import, 61 replies, 5,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Rivalia Online is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://rivaliaonline.com/",
    "Official website responded with HTTP 200",
    "Server address: rivaliaonline.com",
    "Server port: 7171",
    "Thread author: Antropoliz",
    "Original post date: 5/14/2026",
    "Forum discussion: 61 replies",
    "Thread visibility: 5,000 views",
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
      "url": "https://rivaliaonline.com/",
      "label": "Rivalia Online official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-7-4-rivalia-online-february-20th-proxies-artifacts-attributes-cyclopedia-custom-areas.303916/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://rivaliaonline.com/",
      "label": "https://rivaliaonline.com/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/45cc7846d10823a6dcfdd19007852877",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Rivalia Online verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://rivaliaonline.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Rivalia Online?",
      "answer": "Start with https://rivaliaonline.com/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Rivalia Online exposes https://rivaliaonline.com/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function RivaliaOnlinePage() {
  return <CuratedGuideArticle page={page} />;
}
