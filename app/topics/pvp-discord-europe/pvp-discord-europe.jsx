import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-europe');
}

export default function PvpDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-europe" />;
}
