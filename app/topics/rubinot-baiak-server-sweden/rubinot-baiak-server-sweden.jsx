import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-sweden');
}

export default function RubinotBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-sweden" />;
}
