import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-login');
}

export default function WithReviewsThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-login" />;
}
