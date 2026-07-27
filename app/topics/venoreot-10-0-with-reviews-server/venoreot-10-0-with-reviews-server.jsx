import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-with-reviews-server');
}

export default function Venoreot100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-with-reviews-server" />;
}
