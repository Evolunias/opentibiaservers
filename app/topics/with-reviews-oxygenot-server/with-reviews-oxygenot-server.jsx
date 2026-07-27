import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-server');
}

export default function WithReviewsOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-server" />;
}
