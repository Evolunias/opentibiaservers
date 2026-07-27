import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-with-reviews-server');
}

export default function CalmeraOt11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-with-reviews-server" />;
}
