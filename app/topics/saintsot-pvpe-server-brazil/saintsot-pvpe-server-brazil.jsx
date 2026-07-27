import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-brazil');
}

export default function SaintsotPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-brazil" />;
}
