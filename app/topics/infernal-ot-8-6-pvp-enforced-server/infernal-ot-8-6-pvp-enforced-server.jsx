import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-pvp-enforced-server');
}

export default function InfernalOt86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-pvp-enforced-server" />;
}
