import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-rules');
}

export default function WithReviewsArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-rules" />;
}
