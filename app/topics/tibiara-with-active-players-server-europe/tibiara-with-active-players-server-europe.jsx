import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-europe');
}

export default function TibiaraWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-europe" />;
}
