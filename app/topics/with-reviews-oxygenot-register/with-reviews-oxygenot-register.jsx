import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-register');
}

export default function WithReviewsOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-register" />;
}
