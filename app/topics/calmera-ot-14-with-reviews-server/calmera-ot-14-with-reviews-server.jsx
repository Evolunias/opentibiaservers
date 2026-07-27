import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-with-reviews-server');
}

export default function CalmeraOt14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-with-reviews-server" />;
}
