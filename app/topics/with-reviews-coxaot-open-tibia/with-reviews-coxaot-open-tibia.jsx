import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-open-tibia');
}

export default function WithReviewsCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-open-tibia" />;
}
