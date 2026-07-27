import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-with-active-players-server');
}

export default function Tibijka12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-with-active-players-server" />;
}
