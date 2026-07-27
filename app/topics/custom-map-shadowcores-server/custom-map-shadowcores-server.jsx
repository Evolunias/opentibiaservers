import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-shadowcores-server');
}

export default function CustomMapShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-shadowcores-server" />;
}
