import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-active-players-server-poland');
}

export default function NostaltherWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-active-players-server-poland" />;
}
