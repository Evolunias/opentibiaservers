import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-usa');
}

export default function PvpDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-usa" />;
}
