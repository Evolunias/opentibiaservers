import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive-tibia');
}

export default function WithReviewsMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive-tibia" />;
}
