import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-active-players-server-germany');
}

export default function TibiaoriginsWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-active-players-server-germany" />;
}
