import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-reviews-server-france');
}

export default function CalmeraOtWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-reviews-server-france" />;
}
