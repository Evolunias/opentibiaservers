import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-rules');
}

export default function WithReviewsDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-rules" />;
}
