import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-latin-america');
}

export default function NilotWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-latin-america" />;
}
