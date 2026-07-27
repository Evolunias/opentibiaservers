import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-download');
}

export default function LowrateShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-download" />;
}
