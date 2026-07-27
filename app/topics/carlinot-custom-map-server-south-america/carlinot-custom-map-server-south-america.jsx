import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-south-america');
}

export default function CarlinotCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-south-america" />;
}
