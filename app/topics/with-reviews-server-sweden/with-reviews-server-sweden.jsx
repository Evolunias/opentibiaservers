import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-sweden');
}

export default function WithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-sweden" />;
}
