import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia-rules');
}

export default function WithReviewsOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia-rules" />;
}
