import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-server');
}

export default function AmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-server" />;
}
