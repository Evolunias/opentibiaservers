import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-active-players-server-north-america');
}

export default function NoxiousotWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-active-players-server-north-america" />;
}
