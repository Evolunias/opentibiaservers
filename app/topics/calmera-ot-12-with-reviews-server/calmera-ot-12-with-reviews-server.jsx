import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-with-reviews-server');
}

export default function CalmeraOt12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-with-reviews-server" />;
}
