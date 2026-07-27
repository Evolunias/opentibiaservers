import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-argentina');
}

export default function KasteriaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-argentina" />;
}
