import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-sweden');
}

export default function EmpirebrPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-sweden" />;
}
