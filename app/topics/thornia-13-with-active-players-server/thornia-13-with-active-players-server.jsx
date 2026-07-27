import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-with-active-players-server');
}

export default function Thornia13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-with-active-players-server" />;
}
