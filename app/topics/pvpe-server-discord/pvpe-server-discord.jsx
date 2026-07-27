import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-discord');
}

export default function PvpeServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-discord" />;
}
