import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-uk');
}

export default function KasteriaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-uk" />;
}
