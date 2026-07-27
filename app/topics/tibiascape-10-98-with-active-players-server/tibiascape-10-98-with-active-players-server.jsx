import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-with-active-players-server');
}

export default function Tibiascape1098WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-with-active-players-server" />;
}
