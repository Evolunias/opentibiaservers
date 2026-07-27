import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-website');
}

export default function WithReviewsOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-website" />;
}
