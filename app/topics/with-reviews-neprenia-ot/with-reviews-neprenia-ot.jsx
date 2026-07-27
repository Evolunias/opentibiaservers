import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-ot');
}

export default function WithReviewsNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-ot" />;
}
