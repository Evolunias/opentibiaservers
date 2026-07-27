import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-with-reviews-server');
}

export default function Carlinot15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-with-reviews-server" />;
}
