import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-enforced-server-germany');
}

export default function InfernalOtPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-enforced-server-germany" />;
}
