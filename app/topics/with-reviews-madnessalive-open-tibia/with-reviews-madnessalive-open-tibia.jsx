import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive-open-tibia');
}

export default function WithReviewsMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive-open-tibia" />;
}
