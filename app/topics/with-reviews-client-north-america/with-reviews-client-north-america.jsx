import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-north-america');
}

export default function WithReviewsClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-north-america" />;
}
