import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-active-players-server-uk');
}

export default function SerenityWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-active-players-server-uk" />;
}
