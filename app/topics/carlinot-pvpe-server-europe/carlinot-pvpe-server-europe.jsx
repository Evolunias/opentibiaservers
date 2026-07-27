import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-europe');
}

export default function CarlinotPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-europe" />;
}
