import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-1-with-active-players-server');
}

export default function Tibiascape71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-1-with-active-players-server" />;
}
