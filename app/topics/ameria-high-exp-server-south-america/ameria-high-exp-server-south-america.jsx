import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-south-america');
}

export default function AmeriaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-south-america" />;
}
