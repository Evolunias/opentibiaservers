import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-poland');
}

export default function EmpirebrPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-poland" />;
}
