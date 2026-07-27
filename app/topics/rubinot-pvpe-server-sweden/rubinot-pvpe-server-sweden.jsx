import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-sweden');
}

export default function RubinotPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-sweden" />;
}
