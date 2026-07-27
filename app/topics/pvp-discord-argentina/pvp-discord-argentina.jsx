import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-argentina');
}

export default function PvpDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-argentina" />;
}
