import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-latin-america');
}

export default function TibiantisEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-latin-america" />;
}
