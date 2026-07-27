import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-latin-america-server');
}

export default function RubinotLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-latin-america-server" />;
}
