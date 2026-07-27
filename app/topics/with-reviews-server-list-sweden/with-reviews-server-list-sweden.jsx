import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-list-sweden');
}

export default function WithReviewsServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-list-sweden" />;
}
