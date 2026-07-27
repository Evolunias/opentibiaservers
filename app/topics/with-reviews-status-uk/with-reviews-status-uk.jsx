import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-uk');
}

export default function WithReviewsStatusUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-uk" />;
}
