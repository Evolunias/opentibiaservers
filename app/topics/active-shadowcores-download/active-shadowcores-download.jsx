import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-download');
}

export default function ActiveShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-download" />;
}
