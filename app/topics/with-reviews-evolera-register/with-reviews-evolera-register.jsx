import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-register');
}

export default function WithReviewsEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-register" />;
}
