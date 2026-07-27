import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-poland');
}

export default function WithReviewsStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-poland" />;
}
