import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-latin-america-servers');
}

export default function RubinotLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-latin-america-servers" />;
}
