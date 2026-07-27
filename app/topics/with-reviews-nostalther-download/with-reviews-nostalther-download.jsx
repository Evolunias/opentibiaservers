import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-download');
}

export default function WithReviewsNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-download" />;
}
