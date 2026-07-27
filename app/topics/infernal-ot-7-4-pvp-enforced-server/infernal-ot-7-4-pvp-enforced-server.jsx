import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-pvp-enforced-server');
}

export default function InfernalOt74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-pvp-enforced-server" />;
}
