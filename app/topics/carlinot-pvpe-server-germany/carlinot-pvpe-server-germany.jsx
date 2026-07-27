import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-germany');
}

export default function CarlinotPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-germany" />;
}
