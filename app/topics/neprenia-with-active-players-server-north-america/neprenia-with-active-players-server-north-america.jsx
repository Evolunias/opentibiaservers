import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-north-america');
}

export default function NepreniaWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-north-america" />;
}
