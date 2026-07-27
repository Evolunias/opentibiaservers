import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-client');
}

export default function WithReviewsRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-client" />;
}
