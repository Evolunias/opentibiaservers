import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-with-active-players-server');
}

export default function Midhem76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-with-active-players-server" />;
}
