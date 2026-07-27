import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-download');
}

export default function WithReviewsNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-download" />;
}
