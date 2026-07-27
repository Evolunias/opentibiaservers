import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-private-server');
}

export default function WithReviewsThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-private-server" />;
}
