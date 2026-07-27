import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-4-with-reviews-server');
}

export default function Carlinot74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-4-with-reviews-server" />;
}
