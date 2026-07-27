import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-argentina');
}

export default function WithReviewsStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-argentina" />;
}
