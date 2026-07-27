import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-website');
}

export default function WithReviewsCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-website" />;
}
