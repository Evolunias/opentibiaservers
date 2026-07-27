import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-download');
}

export default function WithReviewsBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-download" />;
}
