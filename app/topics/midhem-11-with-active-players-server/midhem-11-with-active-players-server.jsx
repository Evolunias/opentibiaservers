import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-with-active-players-server');
}

export default function Midhem11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-with-active-players-server" />;
}
