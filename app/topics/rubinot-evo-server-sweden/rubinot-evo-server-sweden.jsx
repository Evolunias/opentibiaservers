import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-sweden');
}

export default function RubinotEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-sweden" />;
}
