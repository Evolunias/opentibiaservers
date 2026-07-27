import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-reviews-server-usa');
}

export default function CalmeraOtWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-reviews-server-usa" />;
}
