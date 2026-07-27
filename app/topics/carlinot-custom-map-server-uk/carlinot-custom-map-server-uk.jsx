import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-uk');
}

export default function CarlinotCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-uk" />;
}
