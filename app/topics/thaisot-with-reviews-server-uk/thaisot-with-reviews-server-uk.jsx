import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-uk');
}

export default function ThaisotWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-uk" />;
}
