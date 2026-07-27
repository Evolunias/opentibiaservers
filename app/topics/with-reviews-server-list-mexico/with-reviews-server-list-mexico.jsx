import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-list-mexico');
}

export default function WithReviewsServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-list-mexico" />;
}
