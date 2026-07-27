import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-germany');
}

export default function EmpirebrNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-germany" />;
}
