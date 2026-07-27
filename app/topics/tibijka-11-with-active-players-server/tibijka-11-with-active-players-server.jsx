import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-with-active-players-server');
}

export default function Tibijka11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-with-active-players-server" />;
}
