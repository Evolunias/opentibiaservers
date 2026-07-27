import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-with-reviews-server');
}

export default function Oxygenot15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-with-reviews-server" />;
}
