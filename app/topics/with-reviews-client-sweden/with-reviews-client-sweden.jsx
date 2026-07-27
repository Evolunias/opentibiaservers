import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-sweden');
}

export default function WithReviewsClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-sweden" />;
}
