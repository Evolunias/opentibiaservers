import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-reviews-server-poland');
}

export default function CalmeraOtWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-reviews-server-poland" />;
}
