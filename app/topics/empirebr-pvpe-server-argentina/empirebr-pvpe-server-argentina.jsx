import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-argentina');
}

export default function EmpirebrPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-argentina" />;
}
