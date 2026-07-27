import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-client');
}

export default function WithReviewsMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-client" />;
}
