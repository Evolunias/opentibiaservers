import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-with-reviews-server');
}

export default function Venoreot15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-with-reviews-server" />;
}
