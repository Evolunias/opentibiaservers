import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-website');
}

export default function WithReviewsElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-website" />;
}
