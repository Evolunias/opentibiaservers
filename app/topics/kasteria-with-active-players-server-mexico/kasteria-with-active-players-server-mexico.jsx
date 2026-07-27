import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-mexico');
}

export default function KasteriaWithActivePlayersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-mexico" />;
}
