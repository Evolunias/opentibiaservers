import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-download');
}

export default function WithReviewsOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-download" />;
}
