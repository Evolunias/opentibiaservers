import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-with-reviews-server');
}

export default function Oxygenot14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-with-reviews-server" />;
}
