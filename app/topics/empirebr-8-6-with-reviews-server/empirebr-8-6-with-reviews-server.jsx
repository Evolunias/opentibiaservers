import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-with-reviews-server');
}

export default function Empirebr86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-with-reviews-server" />;
}
