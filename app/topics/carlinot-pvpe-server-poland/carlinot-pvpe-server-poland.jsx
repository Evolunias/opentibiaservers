import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-poland');
}

export default function CarlinotPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-poland" />;
}
