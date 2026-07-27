import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-north-america');
}

export default function AlasteraCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-north-america" />;
}
