import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-with-reviews-server');
}

export default function Carlinot81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-with-reviews-server" />;
}
