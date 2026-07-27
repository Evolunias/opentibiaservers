import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-poland');
}

export default function WithReviewsSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-poland" />;
}
