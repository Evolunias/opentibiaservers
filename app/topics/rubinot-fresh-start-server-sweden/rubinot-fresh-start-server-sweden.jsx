import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-sweden');
}

export default function RubinotFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-sweden" />;
}
