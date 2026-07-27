import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-latin-america');
}

export default function RubinotEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-latin-america" />;
}
