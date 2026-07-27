import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-latin-america');
}

export default function ArcaniarlEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-latin-america" />;
}
