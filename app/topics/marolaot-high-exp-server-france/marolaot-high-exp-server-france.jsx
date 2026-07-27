import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-high-exp-server-france');
}

export default function MarolaotHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-high-exp-server-france" />;
}
