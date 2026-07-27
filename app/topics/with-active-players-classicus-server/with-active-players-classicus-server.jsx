import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-classicus-server');
}

export default function WithActivePlayersClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-classicus-server" />;
}
