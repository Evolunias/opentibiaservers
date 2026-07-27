import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-ot');
}

export default function WithReviewsRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-ot" />;
}
