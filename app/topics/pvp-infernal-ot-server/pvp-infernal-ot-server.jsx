import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-infernal-ot-server');
}

export default function PvpInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-infernal-ot-server" />;
}
