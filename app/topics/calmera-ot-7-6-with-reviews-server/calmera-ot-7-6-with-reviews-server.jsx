import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-6-with-reviews-server');
}

export default function CalmeraOt76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-6-with-reviews-server" />;
}
