import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-download');
}

export default function WithReviewsElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-download" />;
}
