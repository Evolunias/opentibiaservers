import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-with-active-players-server');
}

export default function Thornia14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-with-active-players-server" />;
}
