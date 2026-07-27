import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera');
}

export default function WithReviewsRealeraKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera" />;
}
