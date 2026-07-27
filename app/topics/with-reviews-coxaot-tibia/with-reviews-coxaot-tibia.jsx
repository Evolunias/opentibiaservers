import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-tibia');
}

export default function WithReviewsCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-tibia" />;
}
