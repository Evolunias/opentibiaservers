import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-download');
}

export default function WithReviewsThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-download" />;
}
