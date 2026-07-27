import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-usa');
}

export default function CarlinotCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-usa" />;
}
