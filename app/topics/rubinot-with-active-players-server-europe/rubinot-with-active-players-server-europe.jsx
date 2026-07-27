import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-active-players-server-europe');
}

export default function RubinotWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-active-players-server-europe" />;
}
