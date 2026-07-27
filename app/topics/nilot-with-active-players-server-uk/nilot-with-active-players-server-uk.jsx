import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-uk');
}

export default function NilotWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-uk" />;
}
