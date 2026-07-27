import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-with-reviews-server');
}

export default function Venoreot11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-with-reviews-server" />;
}
