import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-south-america');
}

export default function WithReviewsStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-south-america" />;
}
