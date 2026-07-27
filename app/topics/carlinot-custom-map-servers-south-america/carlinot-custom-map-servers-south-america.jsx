import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-south-america');
}

export default function CarlinotCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-south-america" />;
}
