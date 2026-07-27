import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-uk');
}

export default function EmpirebrPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-uk" />;
}
