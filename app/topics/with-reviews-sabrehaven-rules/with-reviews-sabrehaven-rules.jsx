import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-rules');
}

export default function WithReviewsSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-rules" />;
}
