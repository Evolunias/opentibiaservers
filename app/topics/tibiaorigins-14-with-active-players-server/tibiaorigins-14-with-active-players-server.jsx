import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-with-active-players-server');
}

export default function Tibiaorigins14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-with-active-players-server" />;
}
