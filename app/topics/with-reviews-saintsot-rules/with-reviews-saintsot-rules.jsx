import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-rules');
}

export default function WithReviewsSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-rules" />;
}
