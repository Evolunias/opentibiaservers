import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-with-active-players-server');
}

export default function Tibiaorigins13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-with-active-players-server" />;
}
