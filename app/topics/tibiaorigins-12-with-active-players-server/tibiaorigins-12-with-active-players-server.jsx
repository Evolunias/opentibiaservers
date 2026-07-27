import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-with-active-players-server');
}

export default function Tibiaorigins12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-with-active-players-server" />;
}
