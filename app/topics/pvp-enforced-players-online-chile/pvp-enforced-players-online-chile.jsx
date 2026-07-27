import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-chile');
}

export default function PvpEnforcedPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-chile" />;
}
