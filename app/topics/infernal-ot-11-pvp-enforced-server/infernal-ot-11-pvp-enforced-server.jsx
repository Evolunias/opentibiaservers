import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-pvp-enforced-server');
}

export default function InfernalOt11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-pvp-enforced-server" />;
}
