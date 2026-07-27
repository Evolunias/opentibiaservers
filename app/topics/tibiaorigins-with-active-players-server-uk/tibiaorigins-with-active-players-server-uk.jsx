import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-active-players-server-uk');
}

export default function TibiaoriginsWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-active-players-server-uk" />;
}
