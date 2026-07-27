import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-open-tibia');
}

export default function WithReviewsEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-open-tibia" />;
}
