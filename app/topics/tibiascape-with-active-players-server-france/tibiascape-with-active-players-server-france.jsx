import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-active-players-server-france');
}

export default function TibiascapeWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-active-players-server-france" />;
}
