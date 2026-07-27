import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-france');
}

export default function WithReviewsDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-france" />;
}
