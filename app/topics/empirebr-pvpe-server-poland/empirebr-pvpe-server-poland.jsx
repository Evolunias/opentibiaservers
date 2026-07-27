import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-poland');
}

export default function EmpirebrPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-poland" />;
}
