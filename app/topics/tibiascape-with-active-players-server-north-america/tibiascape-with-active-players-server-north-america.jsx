import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-active-players-server-north-america');
}

export default function TibiascapeWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-active-players-server-north-america" />;
}
