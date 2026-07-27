import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-sweden');
}

export default function EvoluniaPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-sweden" />;
}
