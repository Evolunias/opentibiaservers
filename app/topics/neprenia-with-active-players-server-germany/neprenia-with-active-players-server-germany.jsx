import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-germany');
}

export default function NepreniaWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-germany" />;
}
