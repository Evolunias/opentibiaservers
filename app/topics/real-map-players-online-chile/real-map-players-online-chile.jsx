import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-chile');
}

export default function RealMapPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-chile" />;
}
