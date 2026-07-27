import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-uk');
}

export default function NepreniaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-uk" />;
}
