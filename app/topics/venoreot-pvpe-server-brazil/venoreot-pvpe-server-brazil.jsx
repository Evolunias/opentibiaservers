import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-brazil');
}

export default function VenoreotPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-brazil" />;
}
