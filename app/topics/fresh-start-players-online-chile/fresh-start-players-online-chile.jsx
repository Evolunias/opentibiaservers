import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-chile');
}

export default function FreshStartPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-chile" />;
}
