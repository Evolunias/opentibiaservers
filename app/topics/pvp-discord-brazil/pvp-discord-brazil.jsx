import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-brazil');
}

export default function PvpDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-brazil" />;
}
