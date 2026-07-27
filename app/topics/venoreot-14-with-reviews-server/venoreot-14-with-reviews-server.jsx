import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-with-reviews-server');
}

export default function Venoreot14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-with-reviews-server" />;
}
