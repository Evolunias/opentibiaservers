import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-europe');
}

export default function EmpirebrPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-europe" />;
}
