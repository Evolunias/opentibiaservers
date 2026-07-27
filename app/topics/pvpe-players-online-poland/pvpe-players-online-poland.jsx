import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-poland');
}

export default function PvpePlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-poland" />;
}
