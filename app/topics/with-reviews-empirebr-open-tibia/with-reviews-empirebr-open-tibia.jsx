import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-open-tibia');
}

export default function WithReviewsEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-open-tibia" />;
}
