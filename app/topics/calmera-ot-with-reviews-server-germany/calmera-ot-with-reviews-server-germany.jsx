import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-reviews-server-germany');
}

export default function CalmeraOtWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-reviews-server-germany" />;
}
