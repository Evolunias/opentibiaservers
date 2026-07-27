import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-with-reviews-server');
}

export default function Empirebr12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-with-reviews-server" />;
}
