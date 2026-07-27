import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-france');
}

export default function TibianusWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-france" />;
}
