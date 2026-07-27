import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-with-active-players-server');
}

export default function Tibijka71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-with-active-players-server" />;
}
