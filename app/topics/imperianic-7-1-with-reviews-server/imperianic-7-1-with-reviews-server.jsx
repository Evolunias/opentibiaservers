import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-1-with-reviews-server');
}

export default function Imperianic71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-1-with-reviews-server" />;
}
