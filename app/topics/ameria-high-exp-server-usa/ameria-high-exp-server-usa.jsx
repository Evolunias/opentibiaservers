import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-usa');
}

export default function AmeriaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-usa" />;
}
