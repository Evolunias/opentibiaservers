import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-usa');
}

export default function PvpePlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-usa" />;
}
