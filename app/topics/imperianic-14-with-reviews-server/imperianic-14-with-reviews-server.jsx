import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-with-reviews-server');
}

export default function Imperianic14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-with-reviews-server" />;
}
