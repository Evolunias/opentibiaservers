import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-south-america');
}

export default function AlasteraCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-south-america" />;
}
