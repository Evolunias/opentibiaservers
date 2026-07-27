import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-imperianic-server');
}

export default function WithActivePlayersImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-imperianic-server" />;
}
