import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-active-players-server-germany');
}

export default function NostaltherWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-active-players-server-germany" />;
}
