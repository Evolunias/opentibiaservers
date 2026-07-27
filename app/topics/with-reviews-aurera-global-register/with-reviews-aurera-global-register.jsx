import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-register');
}

export default function WithReviewsAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-register" />;
}
