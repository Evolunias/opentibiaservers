import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-with-active-players-server');
}

export default function Midhem12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-with-active-players-server" />;
}
