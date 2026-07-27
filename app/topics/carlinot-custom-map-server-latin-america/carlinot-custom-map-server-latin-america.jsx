import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-latin-america');
}

export default function CarlinotCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-latin-america" />;
}
