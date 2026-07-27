import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-chile');
}

export default function WithActivePlayersGuideChileKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-chile" />;
}
