import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-europe');
}

export default function NilotWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-europe" />;
}
