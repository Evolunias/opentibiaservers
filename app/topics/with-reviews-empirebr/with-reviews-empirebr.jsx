import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr');
}

export default function WithReviewsEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr" />;
}
