import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-mexico');
}

export default function CarlinotCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-mexico" />;
}
