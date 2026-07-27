import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-chile');
}

export default function SeasonalWikiChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-chile" />;
}
