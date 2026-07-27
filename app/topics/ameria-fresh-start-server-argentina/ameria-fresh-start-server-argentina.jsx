import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-fresh-start-server-argentina');
}

export default function AmeriaFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-fresh-start-server-argentina" />;
}
