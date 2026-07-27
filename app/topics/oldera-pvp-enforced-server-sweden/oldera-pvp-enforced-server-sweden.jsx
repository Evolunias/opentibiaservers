import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-sweden');
}

export default function OlderaPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-sweden" />;
}
