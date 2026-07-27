import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-europe');
}

export default function MidhemWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-europe" />;
}
