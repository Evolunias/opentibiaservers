import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-98-pvp-enforced-server');
}

export default function InfernalOt1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-98-pvp-enforced-server" />;
}
