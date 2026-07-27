import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-ots');
}

export default function WithReviewsRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-ots" />;
}
