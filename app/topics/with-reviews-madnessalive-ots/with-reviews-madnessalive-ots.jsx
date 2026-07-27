import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive-ots');
}

export default function WithReviewsMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive-ots" />;
}
