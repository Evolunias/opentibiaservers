import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-canada');
}

export default function CarlinotCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-canada" />;
}
