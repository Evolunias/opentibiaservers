import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-download');
}

export default function WithReviewsCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-download" />;
}
