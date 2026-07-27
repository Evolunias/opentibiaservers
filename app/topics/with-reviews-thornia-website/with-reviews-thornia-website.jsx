import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-website');
}

export default function WithReviewsThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-website" />;
}
