import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-south-america');
}

export default function CarlinotPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-south-america" />;
}
