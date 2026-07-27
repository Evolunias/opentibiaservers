import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-canada');
}

export default function PvpDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-canada" />;
}
