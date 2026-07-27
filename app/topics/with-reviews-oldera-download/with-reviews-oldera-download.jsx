import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-download');
}

export default function WithReviewsOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-download" />;
}
