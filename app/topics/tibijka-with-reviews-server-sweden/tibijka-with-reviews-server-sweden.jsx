import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-sweden');
}

export default function TibijkaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-sweden" />;
}
