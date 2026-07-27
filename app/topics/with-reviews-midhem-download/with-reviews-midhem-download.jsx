import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-download');
}

export default function WithReviewsMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-download" />;
}
