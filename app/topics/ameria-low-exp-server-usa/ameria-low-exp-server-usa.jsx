import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-low-exp-server-usa');
}

export default function AmeriaLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-low-exp-server-usa" />;
}
