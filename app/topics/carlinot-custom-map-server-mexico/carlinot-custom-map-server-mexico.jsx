import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-mexico');
}

export default function CarlinotCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-mexico" />;
}
