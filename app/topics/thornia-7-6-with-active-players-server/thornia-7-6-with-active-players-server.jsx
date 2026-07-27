import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-with-active-players-server');
}

export default function Thornia76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-with-active-players-server" />;
}
