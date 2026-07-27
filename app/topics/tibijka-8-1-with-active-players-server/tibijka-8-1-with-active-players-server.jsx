import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-with-active-players-server');
}

export default function Tibijka81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-with-active-players-server" />;
}
