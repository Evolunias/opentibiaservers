import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-germany');
}

export default function EmpirebrPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-germany" />;
}
