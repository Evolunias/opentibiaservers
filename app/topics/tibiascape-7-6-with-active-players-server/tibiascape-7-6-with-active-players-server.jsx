import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-with-active-players-server');
}

export default function Tibiascape76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-with-active-players-server" />;
}
