import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-with-reviews-server');
}

export default function Imperianic74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-with-reviews-server" />;
}
