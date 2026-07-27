import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-high-exp-server-north-america');
}

export default function MarolaotHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-high-exp-server-north-america" />;
}
