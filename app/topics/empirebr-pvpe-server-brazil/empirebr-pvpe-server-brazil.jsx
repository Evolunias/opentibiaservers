import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-brazil');
}

export default function EmpirebrPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-brazil" />;
}
