import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-client');
}

export default function WithReviewsOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-client" />;
}
