import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-with-reviews-server');
}

export default function Empirebr100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-with-reviews-server" />;
}
