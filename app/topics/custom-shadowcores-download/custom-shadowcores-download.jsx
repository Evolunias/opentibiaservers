import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-download');
}

export default function CustomShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-download" />;
}
