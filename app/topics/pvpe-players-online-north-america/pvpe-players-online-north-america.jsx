import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-north-america');
}

export default function PvpePlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-north-america" />;
}
