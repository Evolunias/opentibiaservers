import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-open-tibia');
}

export default function WithReviewsCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-open-tibia" />;
}
