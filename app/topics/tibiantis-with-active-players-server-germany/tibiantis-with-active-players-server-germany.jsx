import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-active-players-server-germany');
}

export default function TibiantisWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-active-players-server-germany" />;
}
