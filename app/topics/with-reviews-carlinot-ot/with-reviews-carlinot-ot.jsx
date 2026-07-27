import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-ot');
}

export default function WithReviewsCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-ot" />;
}
