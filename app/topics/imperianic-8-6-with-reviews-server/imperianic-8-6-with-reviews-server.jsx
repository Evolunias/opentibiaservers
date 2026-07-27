import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-with-reviews-server');
}

export default function Imperianic86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-with-reviews-server" />;
}
