import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-argentina');
}

export default function NepreniaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-argentina" />;
}
