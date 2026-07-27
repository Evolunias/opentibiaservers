import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-north-america');
}

export default function CarlinotCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-north-america" />;
}
