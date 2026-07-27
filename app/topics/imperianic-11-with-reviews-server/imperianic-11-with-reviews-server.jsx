import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-with-reviews-server');
}

export default function Imperianic11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-with-reviews-server" />;
}
