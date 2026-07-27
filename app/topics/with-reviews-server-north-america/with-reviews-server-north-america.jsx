import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-north-america');
}

export default function WithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-north-america" />;
}
