import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-active-players-server-north-america');
}

export default function AureraGlobalWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-active-players-server-north-america" />;
}
