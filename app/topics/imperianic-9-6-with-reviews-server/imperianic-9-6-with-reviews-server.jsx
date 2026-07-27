import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-9-6-with-reviews-server');
}

export default function Imperianic96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-9-6-with-reviews-server" />;
}
