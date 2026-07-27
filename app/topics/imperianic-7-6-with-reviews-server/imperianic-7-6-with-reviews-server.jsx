import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-6-with-reviews-server');
}

export default function Imperianic76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-6-with-reviews-server" />;
}
