import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-chile');
}

export default function NoResetPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-chile" />;
}
