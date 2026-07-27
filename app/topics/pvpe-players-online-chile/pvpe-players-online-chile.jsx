import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-chile');
}

export default function PvpePlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-chile" />;
}
