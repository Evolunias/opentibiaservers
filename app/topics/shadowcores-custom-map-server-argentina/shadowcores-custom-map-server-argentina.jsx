import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-argentina');
}

export default function ShadowcoresCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-argentina" />;
}
