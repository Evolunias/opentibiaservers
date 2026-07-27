import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-0-with-reviews-server');
}

export default function Imperianic80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-0-with-reviews-server" />;
}
