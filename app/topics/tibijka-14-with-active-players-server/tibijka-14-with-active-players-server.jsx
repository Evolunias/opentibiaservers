import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-with-active-players-server');
}

export default function Tibijka14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-with-active-players-server" />;
}
