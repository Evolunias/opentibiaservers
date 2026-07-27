import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-active-players-server-north-america');
}

export default function ImperianicWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-active-players-server-north-america" />;
}
