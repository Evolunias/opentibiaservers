import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-pvp-enforced-server');
}

export default function InfernalOt12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-pvp-enforced-server" />;
}
