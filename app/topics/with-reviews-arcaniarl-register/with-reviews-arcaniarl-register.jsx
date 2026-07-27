import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-register');
}

export default function WithReviewsArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-register" />;
}
