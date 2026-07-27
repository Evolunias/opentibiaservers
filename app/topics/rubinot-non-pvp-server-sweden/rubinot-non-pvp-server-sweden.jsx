import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-sweden');
}

export default function RubinotNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-sweden" />;
}
