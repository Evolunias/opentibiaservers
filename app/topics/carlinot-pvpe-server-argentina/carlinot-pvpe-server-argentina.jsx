import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-argentina');
}

export default function CarlinotPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-argentina" />;
}
