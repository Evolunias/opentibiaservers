import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-with-active-players-server');
}

export default function Thornia12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-with-active-players-server" />;
}
