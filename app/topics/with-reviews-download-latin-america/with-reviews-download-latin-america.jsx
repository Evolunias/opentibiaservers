import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-latin-america');
}

export default function WithReviewsDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-latin-america" />;
}
