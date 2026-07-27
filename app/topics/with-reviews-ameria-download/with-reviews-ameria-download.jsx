import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-download');
}

export default function WithReviewsAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-download" />;
}
