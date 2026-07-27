import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-low-exp-server-poland');
}

export default function AmeriaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-low-exp-server-poland" />;
}
