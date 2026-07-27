import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-latin-america');
}

export default function NtoStarEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-latin-america" />;
}
