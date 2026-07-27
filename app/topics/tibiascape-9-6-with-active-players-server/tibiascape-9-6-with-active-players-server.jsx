import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-with-active-players-server');
}

export default function Tibiascape96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-with-active-players-server" />;
}
