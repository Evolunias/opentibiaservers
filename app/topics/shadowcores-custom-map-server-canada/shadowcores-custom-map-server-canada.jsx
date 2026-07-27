import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-canada');
}

export default function ShadowcoresCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-canada" />;
}
