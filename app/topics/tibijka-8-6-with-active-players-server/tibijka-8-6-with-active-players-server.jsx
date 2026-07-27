import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-with-active-players-server');
}

export default function Tibijka86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-with-active-players-server" />;
}
