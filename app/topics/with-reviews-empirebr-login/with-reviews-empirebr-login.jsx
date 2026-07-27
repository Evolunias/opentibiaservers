import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-login');
}

export default function WithReviewsEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-login" />;
}
