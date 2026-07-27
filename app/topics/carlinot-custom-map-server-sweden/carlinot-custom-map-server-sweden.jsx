import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-sweden');
}

export default function CarlinotCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-sweden" />;
}
