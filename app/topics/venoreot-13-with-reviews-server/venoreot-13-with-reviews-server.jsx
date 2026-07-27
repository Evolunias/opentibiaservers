import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-with-reviews-server');
}

export default function Venoreot13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-with-reviews-server" />;
}
