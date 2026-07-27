import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-sweden');
}

export default function RubinotHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-sweden" />;
}
