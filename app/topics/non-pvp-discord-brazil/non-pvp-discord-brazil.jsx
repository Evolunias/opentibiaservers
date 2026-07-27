import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-brazil');
}

export default function NonPvpDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-brazil" />;
}
