import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-sweden');
}

export default function OlderaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-sweden" />;
}
