import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-canada');
}

export default function VenoreotPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-canada" />;
}
