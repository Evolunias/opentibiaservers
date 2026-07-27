import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-usa');
}

export default function EmpirebrPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-usa" />;
}
