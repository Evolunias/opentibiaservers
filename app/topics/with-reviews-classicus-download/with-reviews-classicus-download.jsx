import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-download');
}

export default function WithReviewsClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-download" />;
}
