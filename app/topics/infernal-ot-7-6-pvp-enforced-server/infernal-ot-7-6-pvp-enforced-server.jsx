import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-6-pvp-enforced-server');
}

export default function InfernalOt76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-6-pvp-enforced-server" />;
}
