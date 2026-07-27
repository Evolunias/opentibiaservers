import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-with-reviews-server');
}

export default function Oxygenot84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-with-reviews-server" />;
}
