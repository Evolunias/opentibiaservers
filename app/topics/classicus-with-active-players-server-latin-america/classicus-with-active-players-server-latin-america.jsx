import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-active-players-server-latin-america');
}

export default function ClassicusWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-active-players-server-latin-america" />;
}
