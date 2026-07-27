import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-pvp-enforced-server');
}

export default function InfernalOt15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-pvp-enforced-server" />;
}
