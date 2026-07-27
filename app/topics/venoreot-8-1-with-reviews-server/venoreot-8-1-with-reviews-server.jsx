import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-1-with-reviews-server');
}

export default function Venoreot81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-1-with-reviews-server" />;
}
