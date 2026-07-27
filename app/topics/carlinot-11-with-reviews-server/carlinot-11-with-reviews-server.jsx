import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-with-reviews-server');
}

export default function Carlinot11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-with-reviews-server" />;
}
