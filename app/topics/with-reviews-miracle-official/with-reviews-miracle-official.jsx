import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-official');
}

export default function WithReviewsMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-official" />;
}
