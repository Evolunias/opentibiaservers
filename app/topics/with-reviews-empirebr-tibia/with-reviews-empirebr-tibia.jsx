import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-tibia');
}

export default function WithReviewsEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-tibia" />;
}
