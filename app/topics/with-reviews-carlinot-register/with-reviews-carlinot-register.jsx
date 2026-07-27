import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-register');
}

export default function WithReviewsCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-register" />;
}
