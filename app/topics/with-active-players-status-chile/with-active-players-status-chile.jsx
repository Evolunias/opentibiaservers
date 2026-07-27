import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-chile');
}

export default function WithActivePlayersStatusChileKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-chile" />;
}
