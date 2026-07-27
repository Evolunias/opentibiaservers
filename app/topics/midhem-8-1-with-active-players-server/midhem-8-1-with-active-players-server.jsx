import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-1-with-active-players-server');
}

export default function Midhem81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-1-with-active-players-server" />;
}
