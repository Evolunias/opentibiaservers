import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-download');
}

export default function WithReviewsLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-download" />;
}
