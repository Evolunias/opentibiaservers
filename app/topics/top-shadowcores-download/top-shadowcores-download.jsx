import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-download');
}

export default function TopShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-download" />;
}
