import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-sweden');
}

export default function OxygenotPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-sweden" />;
}
