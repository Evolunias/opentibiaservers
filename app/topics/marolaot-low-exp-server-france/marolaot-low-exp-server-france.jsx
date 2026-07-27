import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-low-exp-server-france');
}

export default function MarolaotLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-low-exp-server-france" />;
}
