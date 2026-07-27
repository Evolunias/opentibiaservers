import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-with-reviews-server');
}

export default function Carlinot13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-with-reviews-server" />;
}
