import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-with-reviews-server');
}

export default function Empirebr76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-with-reviews-server" />;
}
