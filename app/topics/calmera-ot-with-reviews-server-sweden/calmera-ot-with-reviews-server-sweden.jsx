import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-reviews-server-sweden');
}

export default function CalmeraOtWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-reviews-server-sweden" />;
}
