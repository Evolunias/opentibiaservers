import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-usa');
}

export default function WithReviewsClientUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-usa" />;
}
