import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-usa');
}

export default function WithReviewsServersUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-usa" />;
}
