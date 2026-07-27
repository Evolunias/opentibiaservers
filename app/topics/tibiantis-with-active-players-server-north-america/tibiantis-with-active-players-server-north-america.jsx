import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-active-players-server-north-america');
}

export default function TibiantisWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-active-players-server-north-america" />;
}
