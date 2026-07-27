import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-with-reviews-server');
}

export default function Venoreot96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-with-reviews-server" />;
}
