import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-active-players-server-uk');
}

export default function ClassicusWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-active-players-server-uk" />;
}
