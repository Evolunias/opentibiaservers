import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-download');
}

export default function WithReviewsRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-download" />;
}
