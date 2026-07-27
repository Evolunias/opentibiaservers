import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-download');
}

export default function WithReviewsCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-download" />;
}
