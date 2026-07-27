import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-website');
}

export default function WithReviewsCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-website" />;
}
