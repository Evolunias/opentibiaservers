import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-uk');
}

export default function MidhemWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-uk" />;
}
