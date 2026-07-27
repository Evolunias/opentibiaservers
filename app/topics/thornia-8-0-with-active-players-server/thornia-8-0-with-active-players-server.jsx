import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-0-with-active-players-server');
}

export default function Thornia80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-0-with-active-players-server" />;
}
