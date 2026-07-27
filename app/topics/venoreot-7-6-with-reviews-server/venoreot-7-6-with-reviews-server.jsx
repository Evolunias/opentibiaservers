import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-6-with-reviews-server');
}

export default function Venoreot76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-6-with-reviews-server" />;
}
