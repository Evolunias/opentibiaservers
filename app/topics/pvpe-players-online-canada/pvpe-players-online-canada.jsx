import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-canada');
}

export default function PvpePlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-canada" />;
}
