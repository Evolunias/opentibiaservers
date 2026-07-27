import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-argentina');
}

export default function WithReviewsClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-argentina" />;
}
