import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-with-reviews-server');
}

export default function CalmeraOt100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-with-reviews-server" />;
}
