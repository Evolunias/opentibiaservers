import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-mexico');
}

export default function WithReviewsStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-mexico" />;
}
