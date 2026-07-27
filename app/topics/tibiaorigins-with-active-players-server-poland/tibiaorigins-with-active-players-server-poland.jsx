import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-active-players-server-poland');
}

export default function TibiaoriginsWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-active-players-server-poland" />;
}
