import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-with-active-players-server');
}

export default function Tibijka13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-with-active-players-server" />;
}
