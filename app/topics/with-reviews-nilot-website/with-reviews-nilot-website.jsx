import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-website');
}

export default function WithReviewsNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-website" />;
}
