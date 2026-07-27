import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-website');
}

export default function WithReviewsMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-website" />;
}
