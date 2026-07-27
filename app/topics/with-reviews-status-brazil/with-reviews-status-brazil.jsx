import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-brazil');
}

export default function WithReviewsStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-brazil" />;
}
