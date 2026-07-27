import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-brazil');
}

export default function CarlinotPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-brazil" />;
}
