import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-uk');
}

export default function PvpDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-uk" />;
}
