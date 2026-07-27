import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-usa-server');
}

export default function AmeriaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-usa-server" />;
}
