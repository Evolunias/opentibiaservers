import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-uk');
}

export default function AmeriaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-uk" />;
}
