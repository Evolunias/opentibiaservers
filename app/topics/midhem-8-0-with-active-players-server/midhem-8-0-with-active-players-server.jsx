import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-0-with-active-players-server');
}

export default function Midhem80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-0-with-active-players-server" />;
}
