import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-client');
}

export default function WithReviewsRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-client" />;
}
