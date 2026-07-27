import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-classick-drakoria-server');
}

export default function WithActivePlayersClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-classick-drakoria-server" />;
}
