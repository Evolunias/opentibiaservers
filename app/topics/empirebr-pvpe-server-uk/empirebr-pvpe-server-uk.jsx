import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-uk');
}

export default function EmpirebrPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-uk" />;
}
