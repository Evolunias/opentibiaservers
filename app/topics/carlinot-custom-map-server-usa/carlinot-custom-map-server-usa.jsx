import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-usa');
}

export default function CarlinotCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-usa" />;
}
