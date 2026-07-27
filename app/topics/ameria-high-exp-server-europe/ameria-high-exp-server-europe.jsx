import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-europe');
}

export default function AmeriaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-europe" />;
}
