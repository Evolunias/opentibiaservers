import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-with-active-players-server');
}

export default function Tibiascape13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-with-active-players-server" />;
}
