import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-active-players-server-europe');
}

export default function ImperianicWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-active-players-server-europe" />;
}
