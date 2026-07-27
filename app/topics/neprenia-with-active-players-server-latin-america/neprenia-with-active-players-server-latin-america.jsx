import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-latin-america');
}

export default function NepreniaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-latin-america" />;
}
