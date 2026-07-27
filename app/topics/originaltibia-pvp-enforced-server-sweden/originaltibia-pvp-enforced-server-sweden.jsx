import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-sweden');
}

export default function OriginaltibiaPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-sweden" />;
}
