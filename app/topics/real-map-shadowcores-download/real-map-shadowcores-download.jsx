import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-download');
}

export default function RealMapShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-download" />;
}
