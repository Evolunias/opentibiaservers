import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-sweden');
}

export default function RealestaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-sweden" />;
}
