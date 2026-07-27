import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-brazil');
}

export default function EmpirebrPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-brazil" />;
}
