import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-germany');
}

export default function PvpePlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-germany" />;
}
