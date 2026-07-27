import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-72-pvp-enforced-server');
}

export default function InfernalOt772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-72-pvp-enforced-server" />;
}
