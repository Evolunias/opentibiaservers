import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-latin-america');
}

export default function CarlinotHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-latin-america" />;
}
