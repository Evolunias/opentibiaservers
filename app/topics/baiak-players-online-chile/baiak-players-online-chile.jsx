import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-chile');
}

export default function BaiakPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-chile" />;
}
