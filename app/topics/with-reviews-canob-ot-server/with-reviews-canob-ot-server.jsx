import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-ot-server');
}

export default function WithReviewsCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-ot-server" />;
}
