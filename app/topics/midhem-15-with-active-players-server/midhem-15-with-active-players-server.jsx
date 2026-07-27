import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-with-active-players-server');
}

export default function Midhem15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-with-active-players-server" />;
}
