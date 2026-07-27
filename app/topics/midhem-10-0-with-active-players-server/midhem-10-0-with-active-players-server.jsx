import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-with-active-players-server');
}

export default function Midhem100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-with-active-players-server" />;
}
