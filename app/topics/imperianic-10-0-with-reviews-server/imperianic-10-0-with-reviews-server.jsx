import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-with-reviews-server');
}

export default function Imperianic100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-with-reviews-server" />;
}
