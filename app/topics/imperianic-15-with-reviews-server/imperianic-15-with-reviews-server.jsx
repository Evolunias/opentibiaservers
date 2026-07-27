import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-with-reviews-server');
}

export default function Imperianic15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-with-reviews-server" />;
}
