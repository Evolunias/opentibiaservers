import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-with-active-players-server');
}

export default function Tibiascape11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-with-active-players-server" />;
}
