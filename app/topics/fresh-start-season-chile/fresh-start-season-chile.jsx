import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-chile');
}

export default function FreshStartSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-chile" />;
}
