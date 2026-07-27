import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-europe');
}

export default function KasteriaWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-europe" />;
}
