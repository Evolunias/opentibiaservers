import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-active-players-server-europe');
}

export default function TibiaoriginsWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-active-players-server-europe" />;
}
