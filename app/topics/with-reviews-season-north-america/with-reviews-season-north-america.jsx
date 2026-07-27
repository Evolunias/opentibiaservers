import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-north-america');
}

export default function WithReviewsSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-north-america" />;
}
