import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-98-with-reviews-server');
}

export default function Empirebr1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-98-with-reviews-server" />;
}
