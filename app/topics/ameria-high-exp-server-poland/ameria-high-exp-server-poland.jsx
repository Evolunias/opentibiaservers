import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-poland');
}

export default function AmeriaHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-poland" />;
}
