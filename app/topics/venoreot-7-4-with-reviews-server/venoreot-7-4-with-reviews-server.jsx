import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-4-with-reviews-server');
}

export default function Venoreot74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-4-with-reviews-server" />;
}
