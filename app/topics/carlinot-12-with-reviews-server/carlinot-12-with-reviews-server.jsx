import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-with-reviews-server');
}

export default function Carlinot12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-with-reviews-server" />;
}
