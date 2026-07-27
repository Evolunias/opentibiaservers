import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-sweden');
}

export default function ElderaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-sweden" />;
}
