import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-north-america');
}

export default function ThaisotWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-north-america" />;
}
