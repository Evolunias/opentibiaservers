import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-with-reviews-server');
}

export default function Empirebr71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-with-reviews-server" />;
}
