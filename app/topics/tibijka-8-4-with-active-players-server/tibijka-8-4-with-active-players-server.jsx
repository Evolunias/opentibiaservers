import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-with-active-players-server');
}

export default function Tibijka84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-with-active-players-server" />;
}
