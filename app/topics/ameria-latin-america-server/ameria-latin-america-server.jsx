import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-latin-america-server');
}

export default function AmeriaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-latin-america-server" />;
}
