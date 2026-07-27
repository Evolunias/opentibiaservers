import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-sweden');
}

export default function RealeraPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-sweden" />;
}
