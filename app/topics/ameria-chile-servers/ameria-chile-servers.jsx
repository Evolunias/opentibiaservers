import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-chile-servers');
}

export default function AmeriaChileServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-chile-servers" />;
}
