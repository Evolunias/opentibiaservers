import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-active-players-server-europe');
}

export default function NtoStarWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-active-players-server-europe" />;
}
