import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-sweden');
}

export default function MidhemWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-sweden" />;
}
