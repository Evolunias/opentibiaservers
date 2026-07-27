import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-latin-america');
}

export default function EmpirebrPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-latin-america" />;
}
