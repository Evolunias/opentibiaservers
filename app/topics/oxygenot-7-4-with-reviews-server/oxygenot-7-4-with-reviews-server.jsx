import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-with-reviews-server');
}

export default function Oxygenot74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-with-reviews-server" />;
}
