import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-argentina');
}

export default function CarlinotCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-argentina" />;
}
