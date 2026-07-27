import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-mexico');
}

export default function ThaisotWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-mexico" />;
}
