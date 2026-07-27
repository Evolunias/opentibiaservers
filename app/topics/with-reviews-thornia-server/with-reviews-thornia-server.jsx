import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-server');
}

export default function WithReviewsThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-server" />;
}
