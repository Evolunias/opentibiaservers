import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-mexico');
}

export default function AmeriaHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-mexico" />;
}
