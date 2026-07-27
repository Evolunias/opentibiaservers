import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-9-6-with-reviews-server');
}

export default function CalmeraOt96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-9-6-with-reviews-server" />;
}
