import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia');
}

export default function WithReviewsNepreniaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia" />;
}
