import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-with-reviews-server');
}

export default function Empirebr15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-with-reviews-server" />;
}
