import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-baiak-ilusion-rules');
}

export default function WithReviewsBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-baiak-ilusion-rules" />;
}
