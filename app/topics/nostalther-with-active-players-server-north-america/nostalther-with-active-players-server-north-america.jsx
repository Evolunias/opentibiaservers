import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-active-players-server-north-america');
}

export default function NostaltherWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-active-players-server-north-america" />;
}
