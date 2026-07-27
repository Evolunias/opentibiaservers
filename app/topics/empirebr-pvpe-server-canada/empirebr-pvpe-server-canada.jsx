import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-canada');
}

export default function EmpirebrPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-canada" />;
}
