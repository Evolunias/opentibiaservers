import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-sweden');
}

export default function WithReviewsStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-sweden" />;
}
