import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-poland');
}

export default function TibijkaWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-poland" />;
}
