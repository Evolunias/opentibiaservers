import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-register');
}

export default function WithReviewsClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-register" />;
}
