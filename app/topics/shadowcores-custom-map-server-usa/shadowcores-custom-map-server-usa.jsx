import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-usa');
}

export default function ShadowcoresCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-usa" />;
}
