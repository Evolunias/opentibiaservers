import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-open-tibia');
}

export default function WithReviewsBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-open-tibia" />;
}
