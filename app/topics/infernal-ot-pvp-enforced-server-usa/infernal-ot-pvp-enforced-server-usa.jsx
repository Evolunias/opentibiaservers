import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-enforced-server-usa');
}

export default function InfernalOtPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-enforced-server-usa" />;
}
