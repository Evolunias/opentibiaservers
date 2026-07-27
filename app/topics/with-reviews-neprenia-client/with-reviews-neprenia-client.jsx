import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-client');
}

export default function WithReviewsNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-client" />;
}
