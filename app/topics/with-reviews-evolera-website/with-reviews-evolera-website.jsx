import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-website');
}

export default function WithReviewsEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-website" />;
}
