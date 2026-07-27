import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-usa');
}

export default function EmpirebrPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-usa" />;
}
