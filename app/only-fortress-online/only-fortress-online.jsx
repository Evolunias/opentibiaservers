import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-only-fortress-online",
  "slug": "only-fortress-online",
  "name": "Only Fortress Online",
  "host": "onlyfortress.online",
  "ip": "onlyfortress.online",
  "port": 7171,
  "location": "Brazil, France",
  "version": "13",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 12,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/brazil-france-custom-only-fortress-online-the-new-tibia-like-genre-game-new-season-iii-starting-1st-july.284937/",
  "source_url": "https://otland.net/threads/brazil-france-custom-only-fortress-online-the-new-tibia-like-genre-game-new-season-iii-starting-1st-july.284937/",
  "website_url": "https://onlyfortress.online",
  "external_launch_url": "https://onlyfortress.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Only Fortress Online",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.803Z",
  "last_seen_at": "2023-05-16T20:58:25+0200",
  "last_check": "2026-07-28T02:51:23.803Z",
  "official_summary": "Only Fortress Online enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Brazil, France, version hint: 13, server address: onlyfortress.online, port 7171, official website reachable during import, 159 replies, 29,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Only Fortress Online is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://onlyfortress.online",
    "Official website responded with HTTP 200",
    "Server address: onlyfortress.online",
    "Server port: 7171",
    "Thread author: Erikas Kontenis",
    "Original post date: 5/17/2023",
    "Forum discussion: 159 replies",
    "Thread visibility: 29,000 views",
    "Parsed version/client hint: 13",
    "Parsed region hint: Brazil, France"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Brazil, France",
    "13",
    "Brazil, France",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://onlyfortress.online",
      "label": "Only Fortress Online official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/brazil-france-custom-only-fortress-online-the-new-tibia-like-genre-game-new-season-iii-starting-1st-july.284937/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://onlyfortress.online",
      "label": "https://onlyfortress.online"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Bolibompa",
      "label": "Bolibompa"
    },
    {
      "type": "source_link",
      "url": "https://www.twitch.tv/InfernaOnline",
      "label": "InfernaOnline"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Lemon",
      "label": "Lemon"
    }
  ],
  "faq_items": [
    {
      "question": "Is Only Fortress Online verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://onlyfortress.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Only Fortress Online?",
      "answer": "Start with https://onlyfortress.online and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Only Fortress Online exposes https://onlyfortress.online from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function OnlyFortressOnlinePage() {
  return <CuratedGuideArticle page={page} />;
}
