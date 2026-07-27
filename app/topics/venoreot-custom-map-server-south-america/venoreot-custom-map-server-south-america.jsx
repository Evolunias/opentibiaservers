import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-south-america');
}

export default function VenoreotCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-south-america" />;
}
