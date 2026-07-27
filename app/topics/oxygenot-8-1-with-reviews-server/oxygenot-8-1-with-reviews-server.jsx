import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-with-reviews-server');
}

export default function Oxygenot81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-with-reviews-server" />;
}
