import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-germany');
}

export default function TibijkaWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-germany" />;
}
