import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-download');
}

export default function WithReviewsAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-download" />;
}
