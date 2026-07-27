import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-ot');
}

export default function WithReviewsMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-ot" />;
}
