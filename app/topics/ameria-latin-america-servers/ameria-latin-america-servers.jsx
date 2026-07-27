import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-latin-america-servers');
}

export default function AmeriaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-latin-america-servers" />;
}
