import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-active-players-server-latin-america');
}

export default function EvoluniaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-active-players-server-latin-america" />;
}
