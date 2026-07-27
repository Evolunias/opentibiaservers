import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-sweden');
}

export default function CarlinotPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-sweden" />;
}
