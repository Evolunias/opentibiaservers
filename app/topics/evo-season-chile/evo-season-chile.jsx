import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-chile');
}

export default function EvoSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="evo-season-chile" />;
}
