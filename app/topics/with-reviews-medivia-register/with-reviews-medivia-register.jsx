import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-register');
}

export default function WithReviewsMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-register" />;
}
