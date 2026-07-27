import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-usa');
}

export default function MidhemWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-usa" />;
}
