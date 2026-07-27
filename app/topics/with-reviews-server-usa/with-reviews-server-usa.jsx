import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-usa');
}

export default function WithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-usa" />;
}
