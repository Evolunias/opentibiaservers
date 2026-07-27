import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-chile');
}

export default function EvoPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-chile" />;
}
