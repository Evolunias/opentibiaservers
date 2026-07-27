import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-argentina');
}

export default function PvpePlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-argentina" />;
}
