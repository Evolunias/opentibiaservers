import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-europe');
}

export default function ThaisotWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-europe" />;
}
