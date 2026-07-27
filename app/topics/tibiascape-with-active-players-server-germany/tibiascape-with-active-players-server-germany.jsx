import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-active-players-server-germany');
}

export default function TibiascapeWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-active-players-server-germany" />;
}
