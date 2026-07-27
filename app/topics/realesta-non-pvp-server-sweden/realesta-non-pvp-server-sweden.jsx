import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-sweden');
}

export default function RealestaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-sweden" />;
}
