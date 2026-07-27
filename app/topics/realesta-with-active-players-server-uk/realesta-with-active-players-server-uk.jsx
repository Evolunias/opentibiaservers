import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-active-players-server-uk');
}

export default function RealestaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-active-players-server-uk" />;
}
