import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-uk');
}

export default function WithReviewsSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-uk" />;
}
