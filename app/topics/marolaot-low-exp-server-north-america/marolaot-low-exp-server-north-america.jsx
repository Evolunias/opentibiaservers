import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-low-exp-server-north-america');
}

export default function MarolaotLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-low-exp-server-north-america" />;
}
