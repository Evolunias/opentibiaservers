import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-with-reviews-server');
}

export default function Empirebr13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-with-reviews-server" />;
}
