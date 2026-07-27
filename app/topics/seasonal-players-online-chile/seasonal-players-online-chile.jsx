import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-chile');
}

export default function SeasonalPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-chile" />;
}
