import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-with-active-players-server');
}

export default function Tibiascape74WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-with-active-players-server" />;
}
