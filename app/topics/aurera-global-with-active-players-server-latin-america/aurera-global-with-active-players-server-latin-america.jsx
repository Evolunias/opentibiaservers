import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-active-players-server-latin-america');
}

export default function AureraGlobalWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-active-players-server-latin-america" />;
}
