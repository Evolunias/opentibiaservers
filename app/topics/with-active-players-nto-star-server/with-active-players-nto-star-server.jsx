import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-nto-star-server');
}

export default function WithActivePlayersNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-nto-star-server" />;
}
