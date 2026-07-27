import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-thaisot-server');
}

export default function WithActivePlayersThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-thaisot-server" />;
}
