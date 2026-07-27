import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-with-active-players-server');
}

export default function Midhem86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-with-active-players-server" />;
}
