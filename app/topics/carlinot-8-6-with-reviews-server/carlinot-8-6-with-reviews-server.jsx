import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-6-with-reviews-server');
}

export default function Carlinot86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-6-with-reviews-server" />;
}
