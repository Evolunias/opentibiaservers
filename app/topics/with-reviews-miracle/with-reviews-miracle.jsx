import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle');
}

export default function WithReviewsMiracleKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle" />;
}
