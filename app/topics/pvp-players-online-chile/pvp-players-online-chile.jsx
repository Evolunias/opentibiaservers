import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-chile');
}

export default function PvpPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-chile" />;
}
