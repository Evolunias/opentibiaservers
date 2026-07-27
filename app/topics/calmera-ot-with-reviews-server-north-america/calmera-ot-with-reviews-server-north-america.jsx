import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-reviews-server-north-america');
}

export default function CalmeraOtWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-reviews-server-north-america" />;
}
