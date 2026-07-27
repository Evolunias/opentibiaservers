import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-download');
}

export default function CurrentShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-download" />;
}
