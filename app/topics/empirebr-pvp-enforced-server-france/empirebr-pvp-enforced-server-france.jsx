import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-france');
}

export default function EmpirebrPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-france" />;
}
