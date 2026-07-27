import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-canada');
}

export default function WithReviewsStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-canada" />;
}
