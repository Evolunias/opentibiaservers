import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-ots');
}

export default function WithReviewsNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-ots" />;
}
