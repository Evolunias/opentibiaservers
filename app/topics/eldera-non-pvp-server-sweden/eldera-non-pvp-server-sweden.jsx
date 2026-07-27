import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-sweden');
}

export default function ElderaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-sweden" />;
}
