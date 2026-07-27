import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-pvp-enforced-server');
}

export default function InfernalOt96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-pvp-enforced-server" />;
}
