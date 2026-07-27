import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-active-players-server-latin-america');
}

export default function RealestaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-active-players-server-latin-america" />;
}
