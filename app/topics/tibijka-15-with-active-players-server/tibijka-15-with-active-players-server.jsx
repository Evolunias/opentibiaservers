import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-with-active-players-server');
}

export default function Tibijka15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-with-active-players-server" />;
}
