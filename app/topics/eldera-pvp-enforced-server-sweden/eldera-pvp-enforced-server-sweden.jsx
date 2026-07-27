import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-sweden');
}

export default function ElderaPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-sweden" />;
}
