import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-register');
}

export default function WithReviewsEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-register" />;
}
