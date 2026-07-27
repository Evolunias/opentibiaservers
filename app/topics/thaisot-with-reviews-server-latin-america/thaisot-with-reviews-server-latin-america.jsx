import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-latin-america');
}

export default function ThaisotWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-latin-america" />;
}
