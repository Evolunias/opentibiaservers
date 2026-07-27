import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-reviews-server-latin-america');
}

export default function CalmeraOtWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-reviews-server-latin-america" />;
}
