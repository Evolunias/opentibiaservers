import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-download');
}

export default function WithReviewsSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-download" />;
}
