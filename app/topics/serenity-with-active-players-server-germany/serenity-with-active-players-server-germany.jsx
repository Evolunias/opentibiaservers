import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-active-players-server-germany');
}

export default function SerenityWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-active-players-server-germany" />;
}
