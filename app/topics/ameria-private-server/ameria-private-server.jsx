import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-private-server');
}

export default function AmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-private-server" />;
}
