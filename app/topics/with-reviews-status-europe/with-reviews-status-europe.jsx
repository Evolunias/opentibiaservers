import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-europe');
}

export default function WithReviewsStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-europe" />;
}
