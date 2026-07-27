import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-rules');
}

export default function WithReviewsNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-rules" />;
}
