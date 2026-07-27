import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive');
}

export default function WithReviewsMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive" />;
}
