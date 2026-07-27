import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-shadowcores-servers');
}

export default function CustomMapShadowcoresServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-shadowcores-servers" />;
}
