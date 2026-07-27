import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-latin-america');
}

export default function WithReviewsSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-latin-america" />;
}
