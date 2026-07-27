import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-germany');
}

export default function EmpirebrPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-germany" />;
}
