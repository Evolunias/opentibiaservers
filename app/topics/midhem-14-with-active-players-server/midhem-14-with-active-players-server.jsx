import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-with-active-players-server');
}

export default function Midhem14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-with-active-players-server" />;
}
