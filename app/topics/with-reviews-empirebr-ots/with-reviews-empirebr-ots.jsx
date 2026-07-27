import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-ots');
}

export default function WithReviewsEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-ots" />;
}
