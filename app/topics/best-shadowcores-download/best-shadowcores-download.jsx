import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-download');
}

export default function BestShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-download" />;
}
