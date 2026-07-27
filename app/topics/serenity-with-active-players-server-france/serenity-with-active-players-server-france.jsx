import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-active-players-server-france');
}

export default function SerenityWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-active-players-server-france" />;
}
