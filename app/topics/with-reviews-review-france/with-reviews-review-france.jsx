import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-france');
}

export default function WithReviewsReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-france" />;
}
