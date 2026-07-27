import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-active-players-server-latin-america');
}

export default function EvoleraWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-active-players-server-latin-america" />;
}
