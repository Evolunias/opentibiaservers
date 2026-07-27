import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-france');
}

export default function AmeriaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-france" />;
}
