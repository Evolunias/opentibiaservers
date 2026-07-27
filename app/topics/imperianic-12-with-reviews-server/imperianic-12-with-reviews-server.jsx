import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-with-reviews-server');
}

export default function Imperianic12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-with-reviews-server" />;
}
