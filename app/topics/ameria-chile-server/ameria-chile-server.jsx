import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-chile-server');
}

export default function AmeriaChileServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-chile-server" />;
}
