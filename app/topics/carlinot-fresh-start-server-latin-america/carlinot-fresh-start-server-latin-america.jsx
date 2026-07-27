import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-latin-america');
}

export default function CarlinotFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-latin-america" />;
}
