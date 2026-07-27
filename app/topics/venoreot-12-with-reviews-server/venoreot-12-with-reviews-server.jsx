import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-with-reviews-server');
}

export default function Venoreot12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-with-reviews-server" />;
}
