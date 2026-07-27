import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-usa');
}

export default function WithReviewsSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-usa" />;
}
