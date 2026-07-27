import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-germany');
}

export default function VenoreotPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-germany" />;
}
