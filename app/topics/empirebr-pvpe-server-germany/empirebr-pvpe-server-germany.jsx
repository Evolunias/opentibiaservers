import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-germany');
}

export default function EmpirebrPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-germany" />;
}
