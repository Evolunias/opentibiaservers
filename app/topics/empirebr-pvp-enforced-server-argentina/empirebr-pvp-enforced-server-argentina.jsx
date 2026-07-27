import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-argentina');
}

export default function EmpirebrPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-argentina" />;
}
