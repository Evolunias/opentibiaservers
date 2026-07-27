import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-brazil');
}

export default function ThaisotWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-brazil" />;
}
