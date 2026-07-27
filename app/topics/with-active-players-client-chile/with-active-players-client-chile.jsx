import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-chile');
}

export default function WithActivePlayersClientChileKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-chile" />;
}
