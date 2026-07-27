import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-active-players-server-europe');
}

export default function NostaltherWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-active-players-server-europe" />;
}
