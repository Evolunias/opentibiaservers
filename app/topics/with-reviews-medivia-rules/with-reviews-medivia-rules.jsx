import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-rules');
}

export default function WithReviewsMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-rules" />;
}
