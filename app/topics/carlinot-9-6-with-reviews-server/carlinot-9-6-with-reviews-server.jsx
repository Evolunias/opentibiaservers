import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-with-reviews-server');
}

export default function Carlinot96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-with-reviews-server" />;
}
