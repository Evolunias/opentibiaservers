import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-rules');
}

export default function WithReviewsImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-rules" />;
}
