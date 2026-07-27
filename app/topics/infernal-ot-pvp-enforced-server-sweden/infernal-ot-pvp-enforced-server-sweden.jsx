import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-enforced-server-sweden');
}

export default function InfernalOtPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-enforced-server-sweden" />;
}
