import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-servers-north-america');
}

export default function AlasteraCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-servers-north-america" />;
}
