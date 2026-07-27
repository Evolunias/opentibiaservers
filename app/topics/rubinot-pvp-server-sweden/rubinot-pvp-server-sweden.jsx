import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-sweden');
}

export default function RubinotPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-sweden" />;
}
