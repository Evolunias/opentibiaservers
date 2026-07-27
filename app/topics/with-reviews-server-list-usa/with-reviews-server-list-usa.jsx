import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-list-usa');
}

export default function WithReviewsServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-list-usa" />;
}
