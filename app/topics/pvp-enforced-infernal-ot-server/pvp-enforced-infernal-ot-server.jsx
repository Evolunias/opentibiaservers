import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-infernal-ot-server');
}

export default function PvpEnforcedInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-infernal-ot-server" />;
}
