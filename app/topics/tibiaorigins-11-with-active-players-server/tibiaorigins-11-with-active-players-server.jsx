import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-with-active-players-server');
}

export default function Tibiaorigins11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-with-active-players-server" />;
}
