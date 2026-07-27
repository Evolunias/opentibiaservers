import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-germany');
}

export default function WithReviewsStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-germany" />;
}
