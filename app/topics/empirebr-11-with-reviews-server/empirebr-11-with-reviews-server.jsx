import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-with-reviews-server');
}

export default function Empirebr11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-with-reviews-server" />;
}
