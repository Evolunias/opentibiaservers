import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-low-exp-server-north-america');
}

export default function AmeriaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-low-exp-server-north-america" />;
}
