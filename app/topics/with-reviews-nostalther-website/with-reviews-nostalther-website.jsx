import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-website');
}

export default function WithReviewsNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-website" />;
}
