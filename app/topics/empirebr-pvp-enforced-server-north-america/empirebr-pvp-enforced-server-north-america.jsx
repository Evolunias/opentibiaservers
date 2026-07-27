import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-north-america');
}

export default function EmpirebrPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-north-america" />;
}
