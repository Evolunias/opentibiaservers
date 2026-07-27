import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-low-exp-server-europe');
}

export default function AmeriaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-low-exp-server-europe" />;
}
