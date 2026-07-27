import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-chile');
}

export default function HighExpPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-chile" />;
}
