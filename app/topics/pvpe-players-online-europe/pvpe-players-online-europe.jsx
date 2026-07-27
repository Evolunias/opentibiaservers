import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-europe');
}

export default function PvpePlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-europe" />;
}
