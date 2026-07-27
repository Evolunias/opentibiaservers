import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-usa');
}

export default function CarlinotPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-usa" />;
}
