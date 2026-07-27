import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-rules');
}

export default function WithReviewsDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-rules" />;
}
