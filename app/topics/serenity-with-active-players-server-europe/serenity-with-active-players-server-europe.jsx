import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-active-players-server-europe');
}

export default function SerenityWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-active-players-server-europe" />;
}
