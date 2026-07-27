import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-calmera-ot-ots');
}

export default function WithReviewsCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-calmera-ot-ots" />;
}
