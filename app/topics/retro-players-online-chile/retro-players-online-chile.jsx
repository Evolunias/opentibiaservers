import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-chile');
}

export default function RetroPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-chile" />;
}
