import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-with-reviews-server');
}

export default function Imperianic13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-with-reviews-server" />;
}
