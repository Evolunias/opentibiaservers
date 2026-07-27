import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-chile');
}

export default function NonPvpPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-chile" />;
}
