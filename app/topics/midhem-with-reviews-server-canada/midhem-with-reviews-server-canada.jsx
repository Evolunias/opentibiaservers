import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-canada');
}

export default function MidhemWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-canada" />;
}
