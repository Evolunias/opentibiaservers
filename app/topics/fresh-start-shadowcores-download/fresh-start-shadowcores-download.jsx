import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-download');
}

export default function FreshStartShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-download" />;
}
