import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-download');
}

export default function WithReviewsTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-download" />;
}
