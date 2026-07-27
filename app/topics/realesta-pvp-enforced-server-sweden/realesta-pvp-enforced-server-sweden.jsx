import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-enforced-server-sweden');
}

export default function RealestaPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-enforced-server-sweden" />;
}
