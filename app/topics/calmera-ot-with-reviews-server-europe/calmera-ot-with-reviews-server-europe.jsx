import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-reviews-server-europe');
}

export default function CalmeraOtWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-reviews-server-europe" />;
}
