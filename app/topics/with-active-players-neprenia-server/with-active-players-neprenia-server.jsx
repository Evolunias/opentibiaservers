import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-neprenia-server');
}

export default function WithActivePlayersNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-neprenia-server" />;
}
