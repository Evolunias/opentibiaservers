import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-low-exp-server-uk');
}

export default function AmeriaLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-low-exp-server-uk" />;
}
