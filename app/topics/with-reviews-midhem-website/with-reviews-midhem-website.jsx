import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-website');
}

export default function WithReviewsMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-website" />;
}
