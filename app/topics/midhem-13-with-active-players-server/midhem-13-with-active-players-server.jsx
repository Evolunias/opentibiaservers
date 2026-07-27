import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-with-active-players-server');
}

export default function Midhem13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-with-active-players-server" />;
}
