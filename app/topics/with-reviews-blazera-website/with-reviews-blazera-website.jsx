import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-website');
}

export default function WithReviewsBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-website" />;
}
