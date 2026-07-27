import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-usa');
}

export default function WithReviewsStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-usa" />;
}
