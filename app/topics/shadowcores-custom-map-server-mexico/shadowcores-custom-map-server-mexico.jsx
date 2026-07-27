import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-mexico');
}

export default function ShadowcoresCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-mexico" />;
}
