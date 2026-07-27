import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-0-with-active-players-server');
}

export default function Thornia100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-0-with-active-players-server" />;
}
