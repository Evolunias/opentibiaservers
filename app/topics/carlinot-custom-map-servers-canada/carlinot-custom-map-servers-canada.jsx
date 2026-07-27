import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-canada');
}

export default function CarlinotCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-canada" />;
}
