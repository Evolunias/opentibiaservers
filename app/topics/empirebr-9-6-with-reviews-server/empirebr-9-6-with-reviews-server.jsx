import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-with-reviews-server');
}

export default function Empirebr96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-with-reviews-server" />;
}
