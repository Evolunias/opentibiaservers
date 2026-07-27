import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-fun-server');
}

export default function AmeriaFunServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-fun-server" />;
}
