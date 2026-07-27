import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-with-active-players-server');
}

export default function Tibiascape15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-with-active-players-server" />;
}
