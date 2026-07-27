import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-website');
}

export default function WithReviewsOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-website" />;
}
