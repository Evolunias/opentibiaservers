import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-4-with-reviews-server');
}

export default function CalmeraOt84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-4-with-reviews-server" />;
}
