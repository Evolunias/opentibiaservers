import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-europe');
}

export default function PvpeDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-europe" />;
}
