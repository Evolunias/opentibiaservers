import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-sweden');
}

export default function ThaisotWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-sweden" />;
}
