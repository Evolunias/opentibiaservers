import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-with-reviews-server');
}

export default function Empirebr14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-with-reviews-server" />;
}
