import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-0-with-active-players-server');
}

export default function Tibijka80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-0-with-active-players-server" />;
}
