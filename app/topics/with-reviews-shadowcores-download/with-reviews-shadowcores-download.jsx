import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-download');
}

export default function WithReviewsShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-download" />;
}
