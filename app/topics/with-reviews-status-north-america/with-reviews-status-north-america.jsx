import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-north-america');
}

export default function WithReviewsStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-north-america" />;
}
