import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-north-america');
}

export default function ShadowcoresCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-north-america" />;
}
