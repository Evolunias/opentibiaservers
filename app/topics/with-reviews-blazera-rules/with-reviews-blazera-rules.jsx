import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-rules');
}

export default function WithReviewsBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-rules" />;
}
