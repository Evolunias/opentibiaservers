import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-latin-america');
}

export default function CarlinotCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-latin-america" />;
}
