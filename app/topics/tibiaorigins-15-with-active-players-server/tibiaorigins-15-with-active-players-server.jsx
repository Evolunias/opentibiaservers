import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-with-active-players-server');
}

export default function Tibiaorigins15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-with-active-players-server" />;
}
