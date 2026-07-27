import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-private-server');
}

export default function WithReviewsCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-private-server" />;
}
