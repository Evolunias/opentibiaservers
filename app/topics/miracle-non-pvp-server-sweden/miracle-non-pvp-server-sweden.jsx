import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-sweden');
}

export default function MiracleNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-sweden" />;
}
