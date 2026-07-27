import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-with-active-players-server');
}

export default function Tibiascape81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-with-active-players-server" />;
}
