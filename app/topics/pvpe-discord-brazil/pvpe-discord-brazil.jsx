import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-brazil');
}

export default function PvpeDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-brazil" />;
}
