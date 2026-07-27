import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-germany-server');
}

export default function AmeriaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-germany-server" />;
}
