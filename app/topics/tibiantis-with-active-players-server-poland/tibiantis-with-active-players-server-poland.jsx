import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-active-players-server-poland');
}

export default function TibiantisWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-active-players-server-poland" />;
}
