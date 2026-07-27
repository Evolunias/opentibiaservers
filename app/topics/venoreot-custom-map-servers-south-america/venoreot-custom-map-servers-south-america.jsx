import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-south-america');
}

export default function VenoreotCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-south-america" />;
}
