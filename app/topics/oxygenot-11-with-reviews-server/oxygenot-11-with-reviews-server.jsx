import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-with-reviews-server');
}

export default function Oxygenot11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-with-reviews-server" />;
}
