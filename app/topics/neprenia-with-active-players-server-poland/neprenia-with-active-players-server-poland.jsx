import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-poland');
}

export default function NepreniaWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-poland" />;
}
