import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-europe');
}

export default function EmpirebrPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-europe" />;
}
