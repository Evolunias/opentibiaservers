import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-rules');
}

export default function WithReviewsCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-rules" />;
}
