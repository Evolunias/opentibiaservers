import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-canada');
}

export default function ThaisotWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-canada" />;
}
