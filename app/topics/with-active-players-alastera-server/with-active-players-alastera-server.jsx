import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-alastera-server');
}

export default function WithActivePlayersAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-alastera-server" />;
}
