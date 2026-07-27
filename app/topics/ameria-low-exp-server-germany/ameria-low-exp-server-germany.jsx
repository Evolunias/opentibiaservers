import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-low-exp-server-germany');
}

export default function AmeriaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-low-exp-server-germany" />;
}
