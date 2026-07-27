import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-argentina');
}

export default function AmeriaHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-argentina" />;
}
