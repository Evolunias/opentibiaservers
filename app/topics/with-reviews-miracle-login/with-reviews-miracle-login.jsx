import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-login');
}

export default function WithReviewsMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-login" />;
}
