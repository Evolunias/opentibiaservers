import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-castabra",
  "slug": "castabra",
  "name": "Castabra",
  "host": "kasteria.pl",
  "ip": "kasteria.pl",
  "port": 7171,
  "location": "Canada",
  "version": "8.0",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 66,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/canada-custom-8-0-castabra-10-october-22-00-cet-17-00-brt.278498/",
  "source_url": "https://otland.net/threads/canada-custom-8-0-castabra-10-october-22-00-cet-17-00-brt.278498/",
  "website_url": "https://kasteria.pl",
  "external_launch_url": "https://kasteria.pl",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Castabra",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.692Z",
  "last_seen_at": "2021-10-26T11:15:14+0200",
  "last_check": "2026-07-28T02:51:25.692Z",
  "official_summary": "Castabra enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Canada, version hint: 8.0, server address: kasteria.pl, port 7171, 757 replies, 132,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Castabra is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://kasteria.pl",
    "Server address: kasteria.pl",
    "Server port: 7171",
    "Thread author: Niebieski",
    "Original post date: 10/26/2021",
    "Forum discussion: 757 replies",
    "Thread visibility: 132,000 views",
    "Parsed version/client hint: 8.0",
    "Parsed region hint: Canada"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Canada",
    "8.0",
    "Canada",
    "Custom / 8.0"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://kasteria.pl",
      "label": "Castabra official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/canada-custom-8-0-castabra-10-october-22-00-cet-17-00-brt.278498/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://kasteria.pl",
      "label": "https://kasteria.pl"
    }
  ],
  "faq_items": [
    {
      "question": "Is Castabra verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://kasteria.pl as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Castabra?",
      "answer": "Start with https://kasteria.pl and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Castabra exposes https://kasteria.pl from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function CastabraPage() {
  return <CuratedGuideArticle page={page} />;
}
