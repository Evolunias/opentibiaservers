import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-rules');
}

export default function WithReviewsRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-rules" />;
}
