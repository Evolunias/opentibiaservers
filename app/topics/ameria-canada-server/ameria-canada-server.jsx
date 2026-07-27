import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-canada-server');
}

export default function AmeriaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-canada-server" />;
}
