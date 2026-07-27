import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-pvp-enforced-server');
}

export default function InfernalOt71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-pvp-enforced-server" />;
}
