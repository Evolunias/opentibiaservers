import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-latin-america');
}

export default function MarolaotSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-latin-america" />;
}
