import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-usa');
}

export default function NepreniaWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-usa" />;
}
