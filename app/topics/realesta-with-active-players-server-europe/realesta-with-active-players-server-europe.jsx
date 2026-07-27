import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-active-players-server-europe');
}

export default function RealestaWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-active-players-server-europe" />;
}
