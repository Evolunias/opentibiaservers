import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-usa');
}

export default function KasteriaWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-usa" />;
}
