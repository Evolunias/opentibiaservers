import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-with-reviews-server');
}

export default function CalmeraOt15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-with-reviews-server" />;
}
