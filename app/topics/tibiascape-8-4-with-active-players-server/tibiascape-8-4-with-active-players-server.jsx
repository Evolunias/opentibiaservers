import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-with-active-players-server');
}

export default function Tibiascape84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-with-active-players-server" />;
}
