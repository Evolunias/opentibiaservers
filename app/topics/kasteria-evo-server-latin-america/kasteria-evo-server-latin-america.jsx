import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-latin-america');
}

export default function KasteriaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-latin-america" />;
}
