import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-list-brazil');
}

export default function WithReviewsServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-list-brazil" />;
}
