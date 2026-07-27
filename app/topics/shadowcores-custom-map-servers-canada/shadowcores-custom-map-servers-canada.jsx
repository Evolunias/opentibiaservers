import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-canada');
}

export default function ShadowcoresCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-canada" />;
}
