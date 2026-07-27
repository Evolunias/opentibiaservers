import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-latin-america');
}

export default function CarlinotLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-latin-america" />;
}
