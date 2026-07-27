import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-argentina');
}

export default function CarlinotCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-argentina" />;
}
