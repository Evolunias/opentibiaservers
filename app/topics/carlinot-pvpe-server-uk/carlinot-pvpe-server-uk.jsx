import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-uk');
}

export default function CarlinotPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-uk" />;
}
