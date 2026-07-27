import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-canada');
}

export default function EmpirebrPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-canada" />;
}
