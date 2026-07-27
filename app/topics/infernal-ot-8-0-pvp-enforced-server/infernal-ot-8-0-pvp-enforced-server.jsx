import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-pvp-enforced-server');
}

export default function InfernalOt80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-pvp-enforced-server" />;
}
