import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-list-north-america');
}

export default function WithReviewsServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-list-north-america" />;
}
