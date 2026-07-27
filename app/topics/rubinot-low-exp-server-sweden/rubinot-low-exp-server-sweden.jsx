import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-sweden');
}

export default function RubinotLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-sweden" />;
}
