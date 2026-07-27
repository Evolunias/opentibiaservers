import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-list-latin-america');
}

export default function WithActivePlayersServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-list-latin-america" />;
}
