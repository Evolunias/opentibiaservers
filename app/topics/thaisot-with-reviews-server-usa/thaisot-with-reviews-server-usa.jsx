import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-usa');
}

export default function ThaisotWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-usa" />;
}
