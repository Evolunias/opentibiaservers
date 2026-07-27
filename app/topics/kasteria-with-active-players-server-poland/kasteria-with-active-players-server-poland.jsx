import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-poland');
}

export default function KasteriaWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-poland" />;
}
